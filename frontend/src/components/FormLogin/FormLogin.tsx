import React, { useState } from "react";
import Swal from 'sweetalert2';
import { login } from "../../services/Authentication.service";
import LoginView from "../../views/Login";

export default function FormLogin(){
    const [credentials, setCredentials] = useState({matricula: '', hash_senha: ''});

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try{
            const funcionario = await login(credentials)
            console.log(funcionario)
        }catch(err: any){
            Swal.fire('Oops!', err.response.data, 'error')
        }
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const { name, value } = e.target;
        setCredentials({
            ...credentials,
            [name]: value
        })
    }

    return(
        <div className="main w-max m-auto mt-10">
            <div className="login">
                <h2 className="text-2xl mb-6">Login</h2>
                <form onSubmit={e => handleFormSubmit(e)}>
                    <div className="flex border rounded text-gray-500 mb-4">
                        <input 
                            className="outline-none px-2 h-full py-2 text-lg" 
                            type="text" 
                            placeholder="email" 
                            onChange={handleInputChange}
                            value={credentials.matricula}
                            name="matricula"
                            required/>
                    </div>

                    <div className="password flex border rounded text-gray-500 mb-4">
                        <input 
                            className="outline-none px-2 h-full py-2 text-lg"
                            type="password" 
                            placeholder="password"
                            onChange={handleInputChange}
                            value={credentials.hash_senha}
                            name="hash_senha"
                            required/>
                    </div>

                    <div className="submit border rounded mb-4 bg-blue-600 text-white cursor-pointer">
                        <div className="wrapper flex w-max mx-auto">
                            <input className="outline-none px-2 h-full cursor-pointer py-2 text-lg bg-transparent" type="submit" value="Login" />
                        </div>
                    </div>
                </form>
            </div>

            {/* <div className="register">
                <h2 className="text-2xl mb-6">Register</h2>
                <form onSubmit={e => createUserHandleFormSubmit(e)}>
                    <div className="flex border rounded text-gray-500 mb-4">
                        <input 
                            className="outline-none px-4 h-full py-2 text-lg" 
                            type="text" 
                            placeholder="username" 
                            onChange={createUserHandleInputChange}
                            value={registerCredential.registerUsername}
                            name="registerUsername"
                            required
                            />
                    </div>

                    <div className="flex border rounded text-gray-500 mb-4">
                        <input 
                            className="outline-none px-4 h-full py-2 text-lg" 
                            type="text" 
                            placeholder="email" 
                            onChange={createUserHandleInputChange}
                            value={registerCredential.registerEmail}
                            name="registerEmail"
                            required
                        />
                    </div>

                    <div className="password flex border rounded text-gray-500 mb-4">
                        <input 
                            className="outline-none px-4 h-full py-2 text-lg" 
                            type="text" 
                            placeholder="password" 
                            onChange={createUserHandleInputChange}
                            value={registerCredential.registerPassword}
                            name="registerPassword"
                            required
                        /> 
                    </div>

                    <div className="submit border rounded mb-4 bg-blue-600 text-white cursor-pointer">
                        <div className="wrapper flex w-max mx-auto">
                            <input className="outline-none px-2 h-full cursor-pointer py-2 text-lg bg-transparent" type="submit" value="Register" />
                        </div>
                    </div>
                </form>
            </div> */}
        </div>
    )
}