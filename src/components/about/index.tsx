import { useNavigate } from "react-router-dom";

export default function About() {
    const navigation = useNavigate();
    return <>
        <div className="card">
            <p>About</p>
        </div>
        <div className="card">
            <button onClick={() => navigation("/home")}>Home</button>
        </div>
    </>
}