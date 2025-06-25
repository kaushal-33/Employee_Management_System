
const Home = () => {
    return (
        <section className="relative bg-gray-900 min-h-screen flex items-center overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="absolute top-1/4 -right-20 w-96 h-96 bg-blue-900 rounded-full mix-blend-overlay filter blur-[100px] animate-float" />
                <div className="absolute bottom-1/3 -left-20 w-96 h-96 bg-purple-900 rounded-full mix-blend-overlay filter blur-[100px] animate-float" style={{ animationDelay: '3s' }} />
                <div className="absolute top-1/3 left-1/2 w-80 h-80 bg-indigo-900 rounded-full mix-blend-overlay filter blur-[90px] animate-float" style={{ animationDelay: '1.5s' }} />
            </div>

            {/* Grid Pattern */}
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

            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Content Section */}
                    <div className="animate-slide-up space-y-8">
                        <div>
                            <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-blue-400 uppercase bg-blue-900/30 rounded-full mb-4">
                                Enterprise Solution
                            </span>
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
                                Modern Workforce <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                                    Management Platform
                                </span>
                            </h1>
                        </div>

                        <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
                            Transform your HR operations with our AI-powered employee management system.
                            Streamline processes, enhance productivity, and gain actionable insights.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="px-8 py-3.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-lg hover:from-blue-500 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                </svg>
                                Get Started
                            </button>
                            <button className="px-8 py-3.5 border border-gray-600 text-white font-medium rounded-lg hover:bg-gray-800/50 transition-all duration-300 backdrop-blur-sm flex items-center justify-center gap-2">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                Watch Demo
                            </button>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-6 pt-6 max-w-md">
                            <div className="text-center p-4 bg-gray-800/50 rounded-xl backdrop-blur-sm">
                                <div className="text-3xl font-bold text-blue-400 mb-1">10K+</div>
                                <div className="text-gray-400 text-xs uppercase tracking-wider">Users</div>
                            </div>
                            <div className="text-center p-4 bg-gray-800/50 rounded-xl backdrop-blur-sm">
                                <div className="text-3xl font-bold text-purple-400 mb-1">99.9%</div>
                                <div className="text-gray-400 text-xs uppercase tracking-wider">Uptime</div>
                            </div>
                            <div className="text-center p-4 bg-gray-800/50 rounded-xl backdrop-blur-sm">
                                <div className="text-3xl font-bold text-indigo-400 mb-1">500+</div>
                                <div className="text-gray-400 text-xs uppercase tracking-wider">Clients</div>
                            </div>
                        </div>
                    </div>
                    <div className="relative animate-scale-in">
                        <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-gray-700 overflow-hidden">
                            {/* Glow effect */}
                            <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-600 rounded-full filter blur-[80px] opacity-20" />
                            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-600 rounded-full filter blur-[80px] opacity-20" />
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-white font-medium flex items-center gap-2">
                                    <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                    </svg>
                                    <span>Team Dashboard</span>
                                </h3>
                                <div className="flex space-x-2">
                                    <div className="w-2.5 h-2.5 bg-red-500 rounded-full" />
                                    <div className="w-2.5 h-2.5 bg-yellow-500 rounded-full" />
                                    <div className="w-2.5 h-2.5 bg-green-500 rounded-full" />
                                </div>
                            </div>

                            {/* Performance chart */}
                            <div className="bg-gray-700/50 rounded-xl p-4 mb-6 border border-gray-600">
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-gray-300 text-sm font-medium">Performance Metrics</span>
                                    <span className="text-green-400 text-sm font-medium flex items-center">
                                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                                        </svg>
                                        +12.5%
                                    </span>
                                </div>
                                <div className="h-32 relative">
                                    {/* Chart bars */}
                                    <div className="absolute bottom-0 left-0 w-full h-full flex items-end gap-1">
                                        {[30, 60, 45, 80, 65, 90, 70].map((height, index) => (
                                            <div
                                                key={index}
                                                className="flex-1 bg-gradient-to-t from-blue-500 to-blue-600 rounded-t-sm"
                                                style={{ height: `${height}%` }}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Team members */}
                            <div className="space-y-3">
                                {[
                                    { initials: 'AS', name: 'Alice Smith', role: 'Frontend Developer', status: 'online' },
                                    { initials: 'BJ', name: 'Bob Johnson', role: 'Product Manager', status: 'away' },
                                    { initials: 'CD', name: 'Carol Davis', role: 'UX Designer', status: 'offline' }
                                ].map((person, index) => (
                                    <div key={index} className="flex items-center gap-3 p-3 bg-gray-700/30 hover:bg-gray-700/50 rounded-lg transition-all duration-200 border border-gray-700">
                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-semibold ${index === 0 ? 'bg-gradient-to-br from-blue-500 to-blue-600' :
                                                index === 1 ? 'bg-gradient-to-br from-purple-500 to-purple-600' :
                                                    'bg-gradient-to-br from-gray-500 to-gray-600'
                                            }`}>
                                            {person.initials}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="text-white text-sm font-medium truncate">{person.name}</div>
                                            <div className="text-gray-400 text-xs truncate">{person.role}</div>
                                        </div>
                                        <div className={`w-2.5 h-2.5 rounded-full ${person.status === 'online' ? 'bg-green-500' :
                                                person.status === 'away' ? 'bg-yellow-500' :
                                                    'bg-gray-500'
                                            }`} />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Floating elements */}
                        <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full opacity-20" />
                        <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full opacity-20" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home