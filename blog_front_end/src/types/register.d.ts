export interface RegisterUser {
    username: string;
    nickName: string;
    password: string;
    confirmPassword: string;
    email: string;
    captcha: string;
}

export interface LoginUser {
    username:string
    password:string
}

//返回类型
export interface  userInfoData{
    createTime:number,
    email:string
    headPic:string
    id:number
    isAdmin:boolean
    nickName;string
    phoneNumber:string
    username:string
}
export interface userInfoDto {
    accessToken:string
    refreshToken:string
    userInfo:userInfoData
}
