import baseApi from "./baseApi";

class userApi extends baseApi {
    private RESOURCE = '/user';
    public async create(data: UserModel.UserCreate): Promise<Number> {
        return await this.call('POST', `${this.RESOURCE}/create`, data);
    }
}

export default userApi;