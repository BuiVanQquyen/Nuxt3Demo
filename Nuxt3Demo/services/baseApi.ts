import { $Fetch } from "ohmyfetch";
class BaseApi {
    private $fetch: $Fetch;
    constructor(fetcher: $Fetch) {
        this.$fetch = fetcher;
    }
    public async call<T>(method: string, url: string, data?: object, extras = {}): Promise<T>{
        const $res: T = await this.$fetch(url, { method : method, body: data, ...extras });
        return $res;
    }
}

export default BaseApi