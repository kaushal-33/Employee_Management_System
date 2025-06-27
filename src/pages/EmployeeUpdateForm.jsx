import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const UpdateEmployeeForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        department: '',
        salary: ''
    });
    let navigate = useNavigate();
    let { id } = useParams();
    useEffect(() => {
        let employeeArr = JSON.parse(localStorage.getItem("employeesDetail")) || [];
        let updateEmployee = employeeArr.find((employee) => employee.id == id)
        if (updateEmployee) {
            setFormData(updateEmployee);
        } else {
            toast.error("Employee not found");
            navigate("/employees-detail");
        }
    }, [id])

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value })
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        if (formData.name.trim() !== "" && formData.department.trim() !== "" && formData.salary.trim() !== "") {
            let employeeArr = JSON.parse(localStorage.getItem("employeesDetail")) || [];
            let updatedEmployeeArr = employeeArr.map((employee) =>
                employee.id == id ? { ...employee, ...formData } : employee
            );
            localStorage.setItem("employeesDetail", JSON.stringify(updatedEmployeeArr));
            navigate("/employees-detail");
            toast.success("Employee Updated...!");
        } else {
            toast.warning("Fill all the input fields...!");
        }
    }
    return (
        <section className="bg-gray-800 my-vh flex items-center">
            <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6 shadow-2xl max-w-md w-full mx-auto">
                <h2 className="text-white text-2xl font-bold mb-6 text-center">Update Employee</h2>
                <form onSubmit={handleUpdate} className="space-y-5">
                    <div>
                        <label className="block text-sm text-gray-400 mb-1">Name</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter employee name"
                        />
                    </div>
                    <div>
                        <label className="block text-sm text-gray-400 mb-1">Department</label>
                        <select
                            name="department"
                            value={formData.department}
                            id="department"
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        >
                            <option value="" disabled>Select department</option>
                            <option value={1}>Engineering</option>
                            <option value={2}>Marketing</option>
                            <option value={3}>Human Resources</option>
                            <option value={4}>Finance</option>
                            <option value={5}>Development</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm text-gray-400 mb-1">Salary (₹)</label>
                        <input
                            type="number"
                            name="salary"
                            id="salary"
                            value={formData.salary}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500"
                            placeholder="Enter salary amount"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform"
                    >
                        update employee
                    </button>
                </form>
            </div>
        </section>
    )
}

export default UpdateEmployeeForm