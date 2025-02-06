import { useState } from 'react';
import logo from './../../assets/logo2.png';
import logoMain from './../../assets/logo.png';
import SignUp from '../../pages/SignUp/SignUp';
import { useNavigate } from 'react-router-dom';

const MentorSignUp = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        remember: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Form Submitted:', formData);
        try {
            const result = await SignUp({
                name: formData?.name,
                email: formData?.email,
                password: formData?.password,
                role: 'Mentor'
            });
            console.log(result);
            navigate('/');
        }
        catch (error) {
            console.log(error)
        }
    };

    return (
        <div className="flex min-h-screen">
            <form onSubmit={handleSubmit} className="w-full lg:w-1/2 flex flex-col justify-center items-center bg-white">
                <div className="w-full max-w-md">
                    <div className="flex justify-center mb-8">
                        <img alt="Alpha Science Lab" className="h-10 w-10 rounded-full border border-blue-700" src={logo} />
                        <h1 className="text-2xl font-bold text-blue-600 ml-2">Alpha Science Lab</h1>
                    </div>
                    <h2 className="text-2xl font-bold mb-2">Sign Up as a Mentor</h2>
                    <p className="text-gray-500 mb-6">Welcome to ASL!</p>

                    <div className="mb-4">
                        <label className="block text-gray-700">Name</label>
                        <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
                            <input
                                className="flex-1 outline-none"
                                placeholder="Name"
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700">Email</label>
                        <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
                            <input
                                className="flex-1 outline-none"
                                placeholder="Email"
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700">Password</label>
                        <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
                            <input
                                className="flex-1 outline-none"
                                placeholder="Password"
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-between mb-6">
                        <label className="flex items-center">
                            <input
                                className="form-checkbox text-blue-600"
                                type="checkbox"
                                name="remember"
                                checked={formData.remember}
                                onChange={handleChange}
                            />
                            <span className="ml-2 text-gray-700">Remember me</span>
                        </label>
                    </div>

                    <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg">
                        Sign Up
                    </button>
                </div>
            </form>

            <div className="hidden lg:flex w-1/2 bg-blue-600 items-center justify-center">
                <div className="text-center text-white">
                    <img alt="Alpha Science Lab" className="mb-8 opacity-80" height="300" src={logoMain} width="300" />
                    <h2 className="text-3xl font-bold mb-2">Amplify your knowledge</h2>
                    <p className="text-lg text-gray-100">Grow With us</p>
                </div>
            </div>
        </div>
    );
};

export default MentorSignUp;
