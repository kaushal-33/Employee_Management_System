import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const EmployeeForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        department: '',
        salary: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.name.trim() && formData.department.trim() && formData.salary.trim()) {
            let employeeArr = JSON.parse(localStorage.getItem("employeesDetail")) || [];
            let newEmployee = { ...formData, id: Date.now() };
            employeeArr.push(newEmployee);
            localStorage.setItem("employeesDetail", JSON.stringify(employeeArr));
            setFormData({ name: '', department: '', salary: '' });
            navigate("/employees-detail");
            toast.success("New employee added...!");
        } else {
            toast.warning("Must fill all the input fields...!");
        }
    };

    return (
        <section className="relative min-h-screen bg-gray-900 flex items-center justify-center px-4 py-12 overflow-x-hidden">
            {/* Background blobs */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="absolute top-1/4 -right-20 w-96 h-96 bg-blue-900 rounded-full mix-blend-overlay filter blur-[100px] animate-float" />
                <div className="absolute bottom-1/3 -left-20 w-96 h-96 bg-purple-900 rounded-full mix-blend-overlay filter blur-[100px] animate-float" style={{ animationDelay: '3s' }} />
                <div className="absolute top-1/3 left-1/2 w-80 h-80 bg-indigo-900 rounded-full mix-blend-overlay filter blur-[90px] animate-float" style={{ animationDelay: '1.5s' }} />
            </div>

            {/* Grid Overlay */}
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
            <div className="relative z-10 max-w-md w-full bg-white/5 border border-gray-700 rounded-2xl p-8 shadow-2xl backdrop-blur-xl">
                <h2 className="text-3xl font-bold text-white text-center mb-8">Add New Employee</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter employee name"
                            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Department */}
                    <div>
                        <label htmlFor="department" className="block text-sm font-medium text-gray-300 mb-1">
                            Department
                        </label>
                        <select
                            id="department"
                            value={formData.department}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        >
                            <option value="" disabled>Select department</option>
                            <option value={1}>Engineering</option>
                            <option value={2}>Marketing</option>
                            <option value={3}>Human Resources</option>
                            <option value={4}>Finance</option>
                            <option value={5}>Development</option>
                        </select>
                    </div>

                    {/* Salary */}
                    <div>
                        <label htmlFor="salary" className="block text-sm font-medium text-gray-300 mb-1">
                            Salary (₹)
                        </label>
                        <input
                            type="number"
                            id="salary"
                            value={formData.salary}
                            onChange={handleChange}
                            placeholder="Enter salary amount"
                            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
                        />
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-lg"
                    >
                        Add Employee
                    </button>
                </form>
            </div>
        </section>
    );
};

export default EmployeeForm;
