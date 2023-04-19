export default defineNuxtPlugin((ssrContext) => {
    const configRuntime = useRuntimeConfig()
    const headers = useRequestHeaders(['cookie'])

    const fetchApi = $fetch.create({
        baseURL: configRuntime.public.apiBase,
        headers: headers,
        async onRequest({request, options}){
            // set the request header
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
    })
    return{
        provide:{
            api : fetchApi
        }
    }
})