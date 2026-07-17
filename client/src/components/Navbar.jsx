import { Link, useNavigate } from "react-router-dom";

function Navbar() {

    const navigate = useNavigate();

    const logout = () => {

        localStorage.removeItem("token");

        navigate("/");

    };

    return (

        <nav className="bg-blue-600 text-white shadow">

            <div className="max-w-6xl mx-auto flex justify-between items-center p-4">

                <h1 className="text-2xl font-bold">
                    AI Resume Matcher
                </h1>

                <div className="flex gap-6">

                    <Link to="/dashboard">
                        Dashboard
                    </Link>

                    <Link to="/history">
                        History
                    </Link>

                    <button
                        onClick={logout}
                        className="bg-red-500 px-4 rounded"
                    >
                        Logout
                    </button>

                </div>

            </div>

        </nav>

    );

}

export default Navbar;