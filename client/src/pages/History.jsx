import { useEffect, useState } from "react";
import api from "../services/api";
import Navbar from "../components/Navbar";

function History() {

  const [history, setHistory] = useState([]);

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {

    try {

      const res = await api.get("/resume/history", {
        headers: {
          Authorization:
            "Bearer " + localStorage.getItem("token"),
        },
      });

      setHistory(res.data.history);

    } catch (err) {
      console.log(err);
    }

  };

  return (

    <div className="min-h-screen bg-slate-100 p-10">

      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl font-bold mb-8">
          Resume Analysis History
        </h1>

        {
          history.map((item) => (

            <div
              key={item._id}
              className="bg-white shadow rounded-xl p-6 mb-6"
            >

              <h2 className="text-2xl font-bold text-green-600">
                Match Score: {item.matchScore}%
              </h2>

              <p className="mt-3">
                <b>Job Description:</b>
              </p>

              <p className="text-gray-600">
                {item.jobDescription}
              </p>

              <p className="mt-4 font-semibold">
                Missing Keywords
              </p>

              <ul className="list-disc ml-6">

                {
                  item.missingKeywords.map((keyword, index) => (

                    <li key={index}>
                      {keyword}
                    </li>

                  ))
                }

              </ul>

            </div>

          ))
        }

      </div>

    </div>

  );

}

export default History;