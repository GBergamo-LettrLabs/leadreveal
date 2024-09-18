import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigation = useNavigate();
    return <>
        <div className="card">
            <p>Home</p>
        </div>
        <div className="card">
            <button onClick={() => navigation("/about")}>About</button>
        </div>
    </>
}