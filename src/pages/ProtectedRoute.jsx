import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const ProtectedRoute = ({ Component }) => {
    let navigate = useNavigate();

    useEffect(() => {
        let status = JSON.parse(localStorage.getItem("isLogin")) || false
        if (!status) navigate("/login");
    }, [])

    return (
        <>
            <Component />
        </>
    )
}

export default ProtectedRoute