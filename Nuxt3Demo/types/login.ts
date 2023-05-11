namespace LoginModel{
    export interface ILoginRequest{
        userName: string,
        password: string
    }
    
    export interface ILoginResponse{
        id: number,
        userName: string,
        password: string,
        token: string
    }
}