import React, { useState } from "react";
import { toast } from 'react-toastify';
import "./index.css"

import api from "../../services/api"

import { useAuth } from "../../context/auth";

export default function SignIn() {
    const [cpf, setCpf] = useState()
    const [password, setPassword] = useState()

    const { singin } = useAuth();

    const handleLogin = async (event) => {
        event.preventDefault()
        const response = await api.post("/session/signin", { cpf, password });
        if (!response.data.err) {
            singin(response.data.token)
        } else {
            toast.error(response.data.message)
        }
    }

    return (
        <div className="login-form">
            <div className="container">
                <div className="row justify-content-center">

                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Login</div>
                            <div className="card-body">
                                <form>

                                    <div className="form-group row">
                                        <label className="col-md-4 col-form-label text-md-right">CPF</label>
                                        <div className="col-md-6">
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="email-address"
                                                required
                                                value={cpf}
                                                onChange={e => setCpf(e.target.value)}
                                            />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label className="col-md-4 col-form-label text-md-right">Senha</label>
                                        <div className="col-md-6">
                                            <input
                                                type="password"
                                                className="form-control"
                                                name="password"
                                                required
                                                value={password}
                                                onChange={e => setPassword(e.target.value)}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-md-6 offset-md-4">
                                        <button onClick={handleLogin} type="submit" className="btn btn-primary">
                                            ENTRAR
                                        </button>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>

    )
}