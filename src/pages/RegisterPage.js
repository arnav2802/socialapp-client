import {useState} from "react";
import {API_URL} from "../config";

export default function RegisterPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    async function register(e) {e.preventDefault();
    const response = await fetch(`${API_URL}/register`, {
        mode: "no-cors",
        method:'POST',
            body: JSON.stringify( {username, password}),
            headers: {'Content-Type': 'application/json'}, }
    )
    if (response.status === 200) {
        alert('registration successful!');
    }else
        alert('registration failed')
    }
    return (
        <form className="register" onSubmit={register}>
            <h1>Register</h1>
            <input type="text" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button>Register</button>
        </form>
    )
}