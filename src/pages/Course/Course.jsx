import { Button } from '@mui/material';
import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../Providers/AuthProvider';

const Course = ({ course, handleClose }) => {
    const AuthDataContext = useContext(AuthContext);

    const makeCourseEnroll = (id) => {
        console.log('=========', id)
        AuthDataContext?.setEnrolledCourses(prev => [...prev, id]);
        handleClose();
        Swal.fire({
            title: 'Successfully enrolled.',
            icon: 'success',
            // text: "That thing is still around?",
        })
    }

    // console.log('ldsjfoadsjif', AuthDataContext?.enrolledCoursesc, course)

    return (
        <div className="course-details bg-white rounded-lg">
            <div className="course-header mb-4">
                <img src={course.image} alt={course.title} className="course-image w-full h-48 object-cover rounded-t-lg" />
                <h1 className="course-title text-2xl font-bold mt-2">{course.title}</h1>
            </div>
            <div className="course-body mb-3">
                <p className="course-short-description text-gray-700 mb-2">{course.description.short}</p>
                <p className="course-long-description text-gray-600 mb-4">{course.description.long}</p>
                <p className="course-duration text-gray-800"><strong>Duration:</strong> {course.duration}</p>
            </div>
            <Button
                onClick={() => makeCourseEnroll(course?.id)}
                fullWidth
                size="small"
                variant='contained'
                disabled={AuthDataContext?.enrolledCourses?.includes(course?.id)}
                sx={{
                    textTransform: 'capitalize',
                    mx: 'auto'
                }}
            >{AuthDataContext?.enrolledCourses?.includes(course?.id) ? "Enrolled" : "Enroll"}</Button>
        </div>
    );
};

export default Course;