import Form from "../components/Form";
import Navbar from "../components/Navbar";
import { Navigate } from "react-router-dom"

export default function Login() {
    console.log("Login");
    return (
        <div>
            <Navbar type="Register" />
            <Form route="/api/token/" method="login" />
        </div>
    );
}
