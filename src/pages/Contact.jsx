import React from 'react'

const Contact = () => {
    return (
        <section className="relative bg-black min-vh py-20 overflow-x-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-float" />
                <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: '3s' }} />
                <div className="absolute top-1/2 right-1/3 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 animate-slide-up">
                    <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
                        Get In
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 ml-3">
                            Touch
                        </span>
                    </h1>
                    <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
                        Ready to transform your workforce management? Let's discuss how we can help your organization thrive.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16">
                    <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
                        <div className="bg-gray-800 rounded-2xl sm:p-8 p-4 shadow-2xl border border-gray-700 h-full">
                            <h2 className="text-3xl font-bold text-white mb-6">
                                Send us a
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"> Message</span>
                            </h2>

                            <div className="space-y-6">
                                {/* Name and Email Row */}
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-gray-300 font-medium mb-2">Full Name *</label>
                                        <input
                                            type="text"
                                            name="name"
                                            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-300 font-medium mb-2">Email Address *</label>
                                        <input
                                            type="email"
                                            name="email"
                                            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                                            placeholder="john@company.com"
                                        />
                                    </div>
                                </div>

                                {/* Company and Phone Row */}
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-gray-300 font-medium mb-2">Company</label>
                                        <input
                                            type="text"
                                            name="company"
                                            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                                            placeholder="Your Company"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-300 font-medium mb-2">Phone Number</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                                            placeholder="+1 (555) 123-4567"
                                        />
                                    </div>
                                </div>

                                {/* Subject Dropdown */}
                                <div>
                                    <label className="block text-gray-300 font-medium mb-2">Subject</label>
                                    <select
                                        name="subject"
                                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                                    >
                                        <option value="general">General Inquiry</option>
                                        <option value="demo">Request Demo</option>
                                        <option value="pricing">Pricing Information</option>
                                        <option value="support">Technical Support</option>
                                        <option value="partnership">Partnership Opportunities</option>
                                    </select>
                                </div>

                                {/* Message */}
                                <div>
                                    <label className="block text-gray-300 font-medium mb-2">Message *</label>
                                    <textarea
                                        name="message"
                                        rows={5}
                                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                                        placeholder="Tell us about your workforce management needs..."
                                    />
                                </div>

                                {/* Submit Button */}
                                <button
                                    className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                                >
                                    Send Message
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
                        {/* Contact Cards */}
                        <div className="space-y-6 mb-8">
                            {/* Office Location */}
                            <div className="bg-gray-800 rounded-2xl sm:p-6 p-4 border border-gray-700 hover:border-blue-500 transition-all duration-300">
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-white text-xl font-semibold mb-2">Visit Our Office</h3>
                                        <p className="text-gray-300 leading-relaxed">
                                            123 Innovation Drive<br />
                                            San Francisco, CA 94105<br />
                                            United States
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="bg-gray-800 rounded-2xl sm:p-6 p-4 border border-gray-700 hover:border-purple-500 transition-all duration-300">
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-white text-xl font-semibold mb-2">Give Us a Call</h3>
                                        <p className="text-gray-300 leading-relaxed">
                                            Sales: +1 (555) 123-4567<br />
                                            Support: +1 (555) 987-6543<br />
                                            Available 24/7
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="bg-gray-800 rounded-2xl sm:p-6 p-4 border border-gray-700 hover:border-pink-500 transition-all duration-300">
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg flex items-center justify-center">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-white text-xl font-semibold mb-2">Email Us</h3>
                                        <p className="text-gray-300 leading-relaxed">
                                            General: hello@workforce.com<br />
                                            Sales: sales@workforce.com<br />
                                            Support: support@workforce.com
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map/Office Image */}
                        <div className="relative animate-scale-in" style={{ animationDelay: '0.6s' }}>
                            <div className="relative">
                                <img
                                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    alt="Modern office building"
                                    className="rounded-2xl shadow-2xl border border-gray-700 w-full h-64 object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
                                <div className="absolute bottom-4 left-4 text-white">
                                    <h4 className="font-semibold text-lg">San Francisco Headquarters</h4>
                                    <p className="text-sm opacity-90">Innovation District</p>
                                </div>
                            </div>
                            {/* Floating elements */}
                            <div className="absolute -top-3 -right-3 w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-60 animate-float" />
                            <div className="absolute -bottom-3 -left-3 w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-60 animate-float" style={{ animationDelay: '2s' }} />
                        </div>

                        {/* Quick Stats */}
                        <div className="grid grid-cols-3 gap-4 mt-8">
                            <div className="text-center bg-gray-800 rounded-xl sm:p-4 p-2 border border-gray-700">
                                <div className="text-2xl font-bold text-blue-400 mb-1"> 2hrs</div>
                                <div className="text-gray-400 text-sm">Response Time</div>
                            </div>
                            <div className="text-center bg-gray-800 rounded-xl sm:p-4 p-2 border border-gray-700">
                                <div className="text-2xl font-bold text-purple-400 mb-1">24/7</div>
                                <div className="text-gray-400 text-sm">Support</div>
                            </div>
                            <div className="text-center bg-gray-800 rounded-xl sm:p-4 p-2 border border-gray-700">
                                <div className="text-2xl font-bold text-pink-400 mb-1">98%</div>
                                <div className="text-gray-400 text-sm">Satisfaction</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="mt-20 animate-slide-up" style={{ animationDelay: '0.8s' }}>
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-white mb-4">
                            Frequently Asked
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"> Questions</span>
                        </h2>
                        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                            Quick answers to common questions about our platform
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
                            <h3 className="text-white font-semibold text-lg mb-3">How quickly can we get started?</h3>
                            <p className="text-gray-300 leading-relaxed">Most organizations can be up and running within 24-48 hours. Our onboarding team will guide you through the entire setup process.</p>
                        </div>
                        <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
                            <h3 className="text-white font-semibold text-lg mb-3">Do you offer training for our team?</h3>
                            <p className="text-gray-300 leading-relaxed">Yes! We provide comprehensive training sessions, documentation, and ongoing support to ensure your team maximizes the platform's potential.</p>
                        </div>
                        <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
                            <h3 className="text-white font-semibold text-lg mb-3">Is my data secure?</h3>
                            <p className="text-gray-300 leading-relaxed">Absolutely. We use enterprise-grade encryption, regular security audits, and comply with SOC 2, GDPR, and other industry standards.</p>
                        </div>
                        <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
                            <h3 className="text-white font-semibold text-lg mb-3">Can I customize the platform?</h3>
                            <p className="text-gray-300 leading-relaxed">Our platform is highly customizable with API access, custom integrations, and configurable workflows to match your specific needs.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact