import { useContext } from "react";
import CourseCard from "../../components/Card/Card";
import { AuthContext } from "../Providers/AuthProvider";

const Home = () => {
    const AuthDataContext = useContext(AuthContext);
    return (
        <>
            <div className="banner bg-green-500 text-white p-5 -mt-6 text-center">
                <h1 className="text-4xl font-bold">Welcome to Smart Class Scheduler</h1>
                <p className="mt-2 text-lg">Choose from a variety of courses to enhance your skills and knowledge.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-4 px-5 py-3 justify-center">
                {AuthDataContext.courses && AuthDataContext.courses.length > 0 && AuthDataContext.courses.map((course, index) => (
                    <div key={index} className="transform transition duration-500 hover:scale-105">
                        <CourseCard course={course} />
                    </div>
                ))}
            </div>
        </>
    )
}

export default Home;