import React from "react";
import "../styles/Navbar.css";
import { useNavigate } from "react-router-dom";

export default function Navbar({ type }) {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        switch (type) {
            case 'Logout':
                navigate('/login');
                break;
            case 'Login':
                navigate('/login');
                break;
            case 'Register':
                navigate('/register');
                break;
            default:
                navigate('*');
                break;
        }
    };
    return (
        <nav className="custom-navbar">
            <div className="navbar-content">
                <a className="navbar-logo" href="#">
                    NoteEase
                </a>

                <div className="navbar-quote">
                    <span>"Your Thoughts, Simplified"</span>
                </div>

                <div className="navbar-action">
                    <button
                        className="navbar-button"
                        type="submit"
                        onClick={handleButtonClick}
                    >
                        {type}
                    </button>
                </div>
            </div>
        </nav>
    );
}
