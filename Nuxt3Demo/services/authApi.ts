import baseApi from "./baseApi";

class authApi extends baseApi {
    private RESOURCE = '/identity';
    public async login(credentials: LoginModel.ILoginRequest): Promise<LoginModel.ILoginResponse> {
        return await this.call('POST', `${this.RESOURCE}/sign-in`, credentials);
    }
}

export default authApi;