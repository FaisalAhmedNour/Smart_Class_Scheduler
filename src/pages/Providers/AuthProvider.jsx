import Cookies from "js-cookie";
import { useState, useEffect, createContext } from "react";

export const AuthContext = createContext();

const courses = [
  {
    id: 1,
    image: "/img1.jpg",
    title: "Python Course",
    description: {
      short: "Learn the basics of Python programming.",
      long: "This course covers the fundamentals of Python, including syntax, data types, and basic algorithms. Perfect for beginners."
    },
    duration: "4 weeks"
  },
  {
    id: 2,
    image: "/img1.jpg",
    title: "Web Development",
    description: {
      short: "Build dynamic web applications using React.",
      long: "Dive into the world of web development with React. Learn how to create interactive UIs, manage state, and integrate with APIs."
    },
    duration: "6 weeks"
  },
  {
    id: 3,
    image: "/img1.jpg",
    title: "Data Science",
    description: {
      short: "Analyze data and build models using R.",
      long: "Explore data science concepts and techniques using R. This course covers data manipulation, visualization, and statistical modeling."
    },
    duration: "8 weeks"
  }
];

const AuthProvider = ({ children }) => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [courses, setCourses] = useState([
    {
      id: 1,
      image: "/img1.jpg",
      title: "Python Course",
      description: {
        short: "Learn the basics of Python programming.",
        long: "This course covers the fundamentals of Python, including syntax, data types, and basic algorithms. Perfect for beginners."
      },
      duration: "4 weeks"
    },
    {
      id: 2,
      image: "/img1.jpg",
      title: "Web Development",
      description: {
        short: "Build dynamic web applications using React.",
        long: "Dive into the world of web development with React. Learn how to create interactive UIs, manage state, and integrate with APIs."
      },
      duration: "6 weeks"
    },
    {
      id: 3,
      image: "/img1.jpg",
      title: "Data Science",
      description: {
        short: "Analyze data and build models using R.",
        long: "Explore data science concepts and techniques using R. This course covers data manipulation, visualization, and statistical modeling."
      },
      duration: "8 weeks"
    }
  ]);
  const authInfo = {
    enrolledCourses,
    setEnrolledCourses,
    courses,
    setCourses
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
