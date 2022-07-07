import http from "../utils/http";

declare interface Credentials{
    matricula: string;
    hash_senha: string;
}

type Token = string;

export const login = async(credentials: Credentials) => {
    const response = await http.post('/auth/login/funcionario', credentials);
    return response.data;
}