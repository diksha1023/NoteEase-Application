import Form from "../components/Form";
import Navbar from "../components/Navbar";

export default function Register() {
    console.log("Register");
    return (
        <div>
            <Navbar type="Login" />
            <Form route="api/user/register/" method={"register"} />
        </div>
    );
}
