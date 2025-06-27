
const About = () => {
    return (
        <section className="relative bg-black min-vh py-20 flex items-center overflow-x-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-32 left-32 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-float" />
                <div className="absolute bottom-32 right-32 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: '4s' }} />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16 animate-slide-up">
                    <h2 className="text-5xl font-bold text-white mb-6 leading-tight">
                        About
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400 ml-3">
                            Our Mission
                        </span>
                    </h2>
                    <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
                        We're revolutionizing how organizations manage their most valuable asset - their people.
                        Built by HR professionals for modern workplaces.
                    </p>
                </div>
                <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                    <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Team collaboration"
                                className="rounded-2xl shadow-2xl border border-gray-700 w-full h-96 object-cover"
                            />
                            <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-cyan-600 to-pink-600 text-white px-6 py-3 rounded-xl shadow-lg">
                                <div className="text-2xl font-bold">2019</div>
                                <div className="text-sm opacity-90">Founded</div>
                            </div>
                        </div>
                    </div>
                    <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
                        <h3 className="text-3xl font-bold text-white mb-6">
                            Empowering Organizations Through
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400"> Smart Technology</span>
                        </h3>
                        <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                            Founded in 2019, we recognized the growing need for intuitive, comprehensive workforce management solutions.
                            Our platform bridges the gap between traditional HR practices and modern digital transformation.
                        </p>
                        <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                            From startups to enterprise organizations, we've helped over 500 companies streamline their operations,
                            boost employee satisfaction, and achieve unprecedented productivity levels.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold">Lightning Fast Performance</h4>
                                    <p className="text-gray-400 text-sm">Real-time updates and instant synchronization</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg flex items-center justify-center">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold">Enterprise Security</h4>
                                    <p className="text-gray-400 text-sm">Bank-level encryption and compliance standards</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold">Scalable Solutions</h4>
                                    <p className="text-gray-400 text-sm">Grows with your team from 10 to 10,000+ employees</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Team Section */}
                <div className="mb-20">
                    <div className="text-center mb-12 animate-slide-up">
                        <h3 className="text-4xl font-bold text-white mb-4">
                            Meet Our
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400"> Leadership Team</span>
                        </h3>
                        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                            Passionate professionals dedicated to transforming workplace management
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Team Member 1 */}
                        <div className="relative group animate-scale-in h-full" style={{ animationDelay: '0.2s' }}>
                            <div className="bg-gray-800 rounded-2xl p-6 border h-full border-gray-700 hover:border-cyan-500 transition-all duration-300 transform hover:-translate-y-2">
                                <div className="relative mb-4">
                                    <img
                                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
                                        alt="Sarah Chen - CEO"
                                        className="w-20 h-20 rounded-full mx-auto object-cover border-4 border-cyan-500"
                                    />
                                </div>
                                <h4 className="text-white text-xl font-bold text-center mb-1">Sarah Chen</h4>
                                <p className="text-cyan-400 text-center mb-3">CEO & Founder</p>
                                <p className="text-gray-400 text-sm text-center leading-relaxed">
                                    Former VP of HR at tech unicorns. 15+ years in workforce optimization and organizational psychology.
                                </p>
                            </div>
                        </div>

                        {/* Team Member 2 */}
                        <div className="relative group animate-scale-in h-full" style={{ animationDelay: '0.4s' }}>
                            <div className="bg-gray-800 rounded-2xl p-6 border h-full border-gray-700 hover:border-pink-500 transition-all duration-300 transform hover:-translate-y-2">
                                <div className="relative mb-4">
                                    <img
                                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
                                        alt="Marcus Rodriguez - CTO"
                                        className="w-20 h-20 rounded-full mx-auto object-cover border-4 border-pink-500"
                                    />
                                </div>
                                <h4 className="text-white text-xl font-bold text-center mb-1">Marcus Rodriguez</h4>
                                <p className="text-pink-400 text-center mb-3">CTO & Co-Founder</p>
                                <p className="text-gray-400 text-sm text-center leading-relaxed">
                                    Full-stack architect with expertise in scalable systems. Previously led engineering teams at Fortune 500 companies.
                                </p>
                            </div>
                        </div>

                        {/* Team Member 3 */}
                        <div className="relative group animate-scale-in h-full" style={{ animationDelay: '0.6s' }}>
                            <div className="bg-gray-800 rounded-2xl p-6 border h-full border-gray-700 hover:border-indigo-500 transition-all duration-300 transform hover:-translate-y-2">
                                <div className="relative mb-4">
                                    <img
                                        src="https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?ga=GA1.1.1944872636.1745340060&semt=ais_hybrid&w=740"
                                        alt="Lisa Thompson - Head of Product"
                                        className="w-20 h-20 rounded-full mx-auto object-cover border-4 border-indigo-500"
                                    />
                                </div>
                                <h4 className="text-white text-xl font-bold text-center mb-1">Star Thompson</h4>
                                <p className="text-indigo-400 text-center mb-3">Head of Product</p>
                                <p className="text-gray-400 text-sm text-center leading-relaxed">
                                    Design thinking expert focused on user experience. Led product development at leading SaaS companies.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Values Section */}
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left - Values */}
                    <div className="animate-slide-up">
                        <h3 className="text-4xl font-bold text-white mb-8">
                            Our
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400">Core Values</span>
                        </h3>
                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center mt-1">
                                    <span className="text-white font-bold text-sm">1</span>
                                </div>
                                <div>
                                    <h4 className="text-white text-xl font-semibold mb-2">People First</h4>
                                    <p className="text-gray-300 leading-relaxed">Every decision we make prioritizes the human experience and employee wellbeing.</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg flex items-center justify-center mt-1">
                                    <span className="text-white font-bold text-sm">2</span>
                                </div>
                                <div>
                                    <h4 className="text-white text-xl font-semibold mb-2">Innovation</h4>
                                    <p className="text-gray-300 leading-relaxed">We continuously push boundaries to create cutting-edge solutions for modern workplaces.</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center mt-1">
                                    <span className="text-white font-bold text-sm">3</span>
                                </div>
                                <div>
                                    <h4 className="text-white text-xl font-semibold mb-2">Transparency</h4>
                                    <p className="text-gray-300 leading-relaxed">Open communication and honest relationships form the foundation of our partnerships.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right - Office Image */}
                    <div className="relative animate-scale-in" style={{ animationDelay: '0.3s' }}>
                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Modern office workspace"
                                className="rounded-2xl shadow-2xl border border-gray-700 w-full h-96 object-cover"
                            />
                            {/* Floating elements */}
                            <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-cyan-400 to-pink-500 rounded-full opacity-70 animate-float" />
                            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-indigo-400 to-cyan-500 rounded-full opacity-70 animate-float" style={{ animationDelay: '2s' }} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About