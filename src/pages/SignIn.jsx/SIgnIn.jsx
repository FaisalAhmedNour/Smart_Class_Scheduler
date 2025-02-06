import React, { useState } from 'react';
import logo from './../../assets/logo2.png';
import logoMain from "./../../assets/logo.png";

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Email:", email);
        console.log("Password:", password);
    };

    return (
        <div className="flex min-h-screen">
            <form onSubmit={handleSubmit} className="w-full lg:w-1/2 flex flex-col justify-center items-center bg-white p-8">
                <div className="w-full max-w-md">
                    <div className="flex justify-center mb-8">
                        <img alt="Alpha Science Lab" className="h-10 w-10 rounded-full border border-blue-700" src={logo} />
                        <h1 className="text-2xl font-bold text-blue-600 ml-2">
                            Alpha Science Lab
                        </h1>
                    </div>
                    <h2 className="text-2xl font-bold mb-2">
                        Log in to your Account
                    </h2>
                    <p className="text-gray-500 mb-6">
                        Welcome back!
                    </p>

                    <div className="mb-4">
                        <label className="block text-gray-700">Email</label>
                        <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
                            <i className="fas fa-envelope text-gray-400 mr-2"></i>
                            <input 
                                className="flex-1 outline-none" 
                                placeholder="Email" 
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700">Password</label>
                        <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
                            <i className="fas fa-lock text-gray-400 mr-2"></i>
                            <input 
                                className="flex-1 outline-none" 
                                placeholder="Password" 
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <i className="fas fa-eye text-gray-400"></i>
                        </div>
                    </div>

                    <div className="flex items-center justify-between mb-6">
                        <label className="flex items-center">
                            <input className="form-checkbox text-blue-600" type="checkbox" />
                            <span className="ml-2 text-gray-700">Remember me</span>
                        </label>
                        <a className="text-blue-600" href="#">Forgot Password?</a>
                    </div>

                    <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg">
                        Log in
                    </button>

                    <p className="text-center text-gray-500 mt-6">
                        Don't have an account? <a className="text-blue-600" href="#">Create an account</a>
                    </p>
                </div>
            </form>

            <div className="hidden lg:flex w-1/2 bg-blue-600 items-center justify-center p-8">
                <div className="text-center text-white">
                    <img alt="Alpha Science Lab" className="mb-8 opacity-80" height="300" src={logoMain} width="300"/>
                    <h2 className="text-3xl font-bold mb-2">Amplify your knowledge</h2>
                    <p className="text-lg text-gray-100">Grow With us</p>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
