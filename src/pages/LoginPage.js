import {useContext, useState} from "react";
import {Navigate} from "react-router-dom";
import {UserContext} from "../UserContext";
import { API_URL } from '../config';

export default function LoginPage() {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [redirect,setRedirect] = useState(false);
    const {setUserInfo} = useContext(UserContext);
    async function login(ev) {
        ev.preventDefault();
        try {
            const response = await fetch(`${API_URL}/login`,  {
                mode: 'no-cors',
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({username, password}),
            });
            if (response.ok) {
                const userInfo = await response.json();
                setUserInfo(userInfo);
                setRedirect(true);
            } else {
                alert('wrong credentials');
            }
        } catch (error) {
            console.error('Login error:', error);
            alert('An error occurred during login');
        }
    }

    if (redirect) {
        return <Navigate to={'/'} />
    }
    return (
        <form className="login" onSubmit={login}>
            <h1>Login</h1>
            <input type="text"
                   placeholder="username"
                   value={username}
                   onChange={ev => setUsername(ev.target.value)}/>
            <input type="password"
                   placeholder="password"
                   value={password}
                   onChange={ev => setPassword(ev.target.value)}/>
            <button>Login</button>
        </form>
    );
}