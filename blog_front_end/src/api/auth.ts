import {http} from "~/api/http";
import type {LoginUser, RegisterUser, userInfoDto} from "~/types/register";
export  interface captchaData {
    data:string
    code:number
}

export async function  getCaptcha(email:string){
    return await  http.get<captchaData>(`/user/register-captcha?address=${email}`)
}

//注册接口
export async function register(registerUser: RegisterUser) {
    return await http.post("/user/register", registerUser);
}

//登陆接口
export async function login(loginUser:LoginUser){
    return await http.post<userInfoDto>('/user/login',loginUser)
}