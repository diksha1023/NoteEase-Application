import "../styles/Note.css";
import { useState } from "react";

export default function Note({ note, onDelete }) {
    const [color, setColor] = useState(getRandomColor());

    const formattedDate = new Date(note.created_at).toLocaleDateString("en-US");

    function getRandomColor() {
        const colors = ["#FFEB3B", "#FFCDD2", "#C8E6C9", "#BBDEFB", "#D1C4E9"];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    return (
        <div className="note-container" style={{ backgroundColor: color }}>
            <p className="note-title">{note.title}</p>
            <p className="note-content">{note.content}</p>
            <p className="note-date">{formattedDate}</p>
            <button className="delete-button" onClick={() => onDelete(note.id)}>
                Delete
            </button>
        </div>
    );
}
