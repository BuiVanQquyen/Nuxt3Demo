import authApi from "~~/services/authApi"
import { $fetch, FetchOptions } from 'ohmyfetch';
import userApi from "~~/services/userApi";
interface IApiInstance {
    auth: authApi,
    user: userApi
}
export default defineNuxtPlugin((ssrContext) => {
    const configRuntime = useRuntimeConfig()
    const authStore = useAuthStore()
    const fetchOptions: FetchOptions = {
        baseURL: configRuntime.public.apiBase,

        async onRequest({request, options}){
            // handle the request
            if(authStore.token){
                options.headers = {
                    'Authorization': 'Bearer ' + authStore.token
                }
            }
        },
        async onRequestError({request, options, error}){
            // handle the request error
        },
        async onResponse({request, response, options}){
            // process response data
        },
        async onResponseError({request, response, error}){
            // handle the response error
        }
    };
    
    /** create a new instance of $fetcher with custom option */
    const apiFetcher = $fetch.create(fetchOptions);
    
    const modules: IApiInstance = {
        auth: new authApi(apiFetcher),
        user: new userApi(apiFetcher),
    };
    return{
        provide:{
            api : modules
        }
    }
})