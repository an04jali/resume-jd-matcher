import { useState } from "react";
import api from "../services/api";
import Navbar from "../components/Navbar";

function Dashboard() {

  const [jobDescription, setJobDescription] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const analyzeResume = async () => {

    if (!file) {
        alert("Please select a resume PDF.");
        return;
    }

    if (!jobDescription.trim()) {
        alert("Please enter a Job Description.");
        return;
    }

    try {

        setLoading(true);

        const formData = new FormData();

        formData.append("resume", file);
        formData.append("jobDescription", jobDescription);

        const res = await api.post(
            "/resume/upload",
            formData,
            {
                headers: {
                    Authorization:
                        "Bearer " +
                        localStorage.getItem("token"),
                },
            }
        );

        setResult(res.data.analysis);

    } catch (error) {

        console.log(error);

    } finally {

        setLoading(false);

    }

  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-100 p-10">

        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">

          <h1 className="text-4xl font-bold text-center mb-8">
            AI Resume ↔ JD Matcher
          </h1>

          <p className="text-gray-600 text-center mb-8">

              Upload your resume and paste a Job Description to get an AI-powered ATS analysis.

          </p>

          <label className="font-semibold">
            Upload Resume
          </label>

          <input
            type="file"
            accept=".pdf"
            onChange={(e) => setFile(e.target.files[0])}
            className="border w-full p-3 rounded mt-2"
          />

          {file && (
              <p className="text-sm text-green-600 mt-2">
                  Selected File: {file.name}
              </p>
          )}

          <label className="font-semibold block mt-6">
            Job Description
          </label>

          <textarea
            rows="8"
            value={jobDescription}
            onChange={(e)=>setJobDescription(e.target.value)}
            className="border w-full rounded p-3 mt-2"
            placeholder="Paste Job Description..."
          />

          <button
            onClick={analyzeResume}
            className="bg-blue-600 text-white w-full py-3 rounded mt-6"
          >
            {loading ? (
                <span>⏳ Analyzing Resume...</span>
            ) : (
                <span>🚀 Analyze Resume</span>
            )}
          </button>

          {
            result && (

              <div className="mt-8 border rounded-xl p-6 bg-slate-50">

                <h2 className="text-2xl font-bold">
                  Analysis Result
                </h2>

                <div className="flex items-center gap-4 mt-3">

                    <div className="w-20 h-20 rounded-full bg-green-500 text-white flex items-center justify-center text-2xl font-bold">

                        {result.matchScore}%

                    </div>

                    <div>

                        <h3 className="text-xl font-semibold">

                            Resume Match Score

                        </h3>

                    </div>

                </div>

                <h3 className="mt-5 text-xl">
                  Missing Keywords
                </h3>

                <ul className="list-disc ml-6">

                  {
                    result.missingKeywords.map((item, index) => (

                      <li key={index}>
                        {item}
                      </li>

                    ))
                  }

                </ul>

                <h3 className="mt-5 text-xl">
                  Suggestions
                </h3>

                <ul className="list-disc ml-6">

                  {
                    result.suggestions.map((item, index) => (

                      <li key={index}>
                        {item}
                      </li>

                    ))
                  }

                </ul>

              </div>

            )
          }

        </div>

      </div>
    </>
  );
}

export default Dashboard;