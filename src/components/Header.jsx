import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = ({ loginUpdate, setLogin }) => {

    const [isMobileMenu, setIsMobileMenu] = useState(false);

    let navigate = useNavigate();

    let handleLogin = () => {
        navigate("/login");
    };
    let handleLogout = () => {
        localStorage.setItem("isLogin", JSON.stringify(false));
        setLogin(false);
        navigate("/");
    };

    return (
        <header className="bg-gray-900 border-b border-gray-700 sticky top-0 z-50 backdrop-blur-md bg-opacity-90">
            {/* Glass morphism effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-purple-900/30" />

            {/* Subtle grid pattern */}
            <div className="absolute inset-0 opacity-5">
                <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>

            <div className="relative z-10 max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <div className="flex items-center space-x-3">
                        <Link to="/" className="flex items-center space-x-3 group">
                            <div className="relative">
                                <div className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-indigo-700 shadow-lg group-hover:from-blue-500 group-hover:to-indigo-600 transition-all duration-300">
                                    <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                                        <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                                    </svg>
                                </div>
                                <div className="absolute -top-1 -right-1 w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                            </div>
                            <div className="text-white">
                                <h1 className="text-lg md:text-xl font-bold tracking-tight">EmployeeHub</h1>
                                <p className="text-xs text-gray-300 opacity-90 hidden sm:block">Management Portal</p>
                            </div>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex md:hidden items-center space-x-3">
                        {loginUpdate && (
                            <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white text-xs font-semibold shadow">
                                JD
                            </div>
                        )}
                        <button onClick={() => setIsMobileMenu(!isMobileMenu)} className="p-2 text-gray-300 hover:text-white rounded-lg transition-all duration-200">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-1">
                        <Link
                            to="/"
                            className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white rounded-lg hover:bg-gray-800/50 transition-all duration-200 relative group"
                        >
                            <span>Home</span>
                            <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-4/5" />
                        </Link>
                        <Link
                            to="/about"
                            className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white rounded-lg hover:bg-gray-800/50 transition-all duration-200 relative group"
                        >
                            <span>About</span>
                            <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-4/5" />
                        </Link>
                        <Link
                            to="/contact"
                            className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white rounded-lg hover:bg-gray-800/50 transition-all duration-200 relative group"
                        >
                            <span>Contact</span>
                            <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-4/5" />
                        </Link>
                        {loginUpdate && (
                            <Link
                                to="/employees-detail"
                                className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white rounded-lg hover:bg-gray-800/50 transition-all duration-200 relative group"
                            >
                                <span>Employees</span>
                                <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-4/5" />
                            </Link>
                        )}
                    </nav>

                    {/* Desktop Profile/Auth Section */}
                    <div className="hidden md:flex items-center space-x-4">
                        <div className="flex items-center space-x-3">
                            <div className="w-9 h-9 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white text-sm font-semibold shadow">
                                {loginUpdate ? "JD" : "GU"}
                            </div>
                            {loginUpdate && (
                                <div className="text-white">
                                    <p className="text-sm font-medium">John Doe</p>
                                    <p className="text-xs text-gray-300">Admin</p>
                                </div>
                            )}
                        </div>
                        {loginUpdate ? (
                            <button
                                onClick={handleLogout}
                                className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-br from-red-600 to-red-700 rounded-lg hover:from-red-500 hover:to-red-600 transition-all duration-200 shadow hover:shadow-md flex items-center space-x-1"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                </svg>
                                <span>Logout</span>
                            </button>
                        ) : (
                            <button
                                onClick={handleLogin}
                                className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-br from-green-600 to-emerald-700 rounded-lg hover:from-green-500 hover:to-emerald-600 transition-all duration-200 shadow hover:shadow-md flex items-center space-x-1"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                                </svg>
                                <span>Login</span>
                            </button>
                        )}
                    </div>
                </div>
            </div>

            {/* Mobile Menu (hidden by default) */}
            {isMobileMenu &&
                <div className="md:hidden bg-gray-800/95 backdrop-blur-sm border-t border-gray-700">
                    <div className="px-4 py-3 space-y-2">
                        <Link
                            to="/"
                            className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700/50 rounded-lg transition-all duration-200"
                        >
                            Home
                        </Link>
                        <Link
                            to="/about"
                            className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700/50 rounded-lg transition-all duration-200"
                        >
                            About
                        </Link>
                        <Link
                            to="/contact"
                            className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700/50 rounded-lg transition-all duration-200"
                        >
                            Contact
                        </Link>
                        {loginUpdate && (
                            <Link
                                to="/employees-detail"
                                className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700/50 rounded-lg transition-all duration-200"
                            >
                                Employees
                            </Link>
                        )}
                        <div className="pt-2 border-t border-gray-700">
                            {loginUpdate ? (
                                <button
                                    onClick={handleLogout}
                                    className="w-full px-3 py-2 text-base font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 transition-all duration-200 flex items-center justify-center space-x-2"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                    </svg>
                                    <span>Logout</span>
                                </button>
                            ) : (
                                <button
                                    onClick={handleLogin}
                                    className="w-full px-3 py-2 text-base font-medium text-white bg-green-600 rounded-lg hover:bg-green-700 transition-all duration-200 flex items-center justify-center space-x-2"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                                    </svg>
                                    <span>Login</span>
                                </button>
                            )}
                        </div>
                    </div>
                </div>}
        </header>
    );
};

export default Header;