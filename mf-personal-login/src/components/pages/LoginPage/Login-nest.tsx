import React, { useEffect, useState} from "react";
import { login, jwt } from "../../data/login";

export default function LoginNest() {
    const [token, setToken] = useState("");

    useEffect(() => {

        const user = () => {
            login("San", "123");
            return jwt.subscribe((val) => setToken(val ?? ""))
        }

        user();
    }, [])

    return <div>JWT: {token}</div>
}