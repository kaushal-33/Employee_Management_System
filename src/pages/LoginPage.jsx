import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const ADMIN_CREDENTIALS = {
    email: "admin123@gmail.com",
    password: "admin@123"
};

const LoginPage = ({ setLogin }) => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = formData;

        if (email === ADMIN_CREDENTIALS.email && password === ADMIN_CREDENTIALS.password) {
            setLogin(true);
            localStorage.setItem("isLogin", JSON.stringify(true));
            setFormData({ email: '', password: '' });
            toast.success("Signed in successfully!");
            navigate("/employees-detail");
        } else {
            toast.error("Email or Password doesn't match!");
        }
    };

    return (
        <section className="relative bg-gray-900 min-h-screen flex items-center justify-center overflow-hidden px-4 py-10">
            {/* Background blobs */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="absolute top-1/4 -right-20 w-96 h-96 bg-blue-900 rounded-full mix-blend-overlay filter blur-[100px] animate-float" />
                <div className="absolute bottom-1/3 -left-20 w-96 h-96 bg-purple-900 rounded-full mix-blend-overlay filter blur-[100px] animate-float" style={{ animationDelay: '3s' }} />
                <div className="absolute top-1/3 left-1/2 w-80 h-80 bg-indigo-900 rounded-full mix-blend-overlay filter blur-[90px] animate-float" style={{ animationDelay: '1.5s' }} />
            </div>

            {/* Grid Pattern */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                    <defs>
                        <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>

            {/* Login Form Card */}
            <div className="relative z-10 w-full max-w-md">
                <div className="bg-white/5 border border-gray-700 backdrop-blur-xl shadow-2xl rounded-2xl p-8 sm:p-10">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-2">Welcome Back</h2>
                        <p className="text-gray-400 text-sm">Please enter your credentials to sign in.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                                Email Address
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="you@example.com"
                                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">
                                Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                placeholder="••••••••"
                                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                        </div>

                        <div className="flex items-center justify-between text-sm text-gray-400">
                            <label className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    className="w-4 h-4 bg-gray-700 border-gray-600 rounded focus:ring-blue-500"
                                />
                                Remember me
                            </label>
                            <a href="#" className="text-blue-400 hover:underline hover:text-blue-300">
                                Forgot password?
                            </a>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-lg"
                        >
                            Sign In
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default LoginPage;
