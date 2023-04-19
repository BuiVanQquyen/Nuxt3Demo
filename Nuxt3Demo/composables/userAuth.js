export const useAuth = () =>{
    const authStore = useAuthStore()
    return authStore.user
}