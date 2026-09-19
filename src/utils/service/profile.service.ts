export const getProfileUsers = async () => {
    const token = localStorage.getItem("token");
    return fetch(`${import.meta.env.VITE_API_BACKEND}/profile`, {
        method: "GET",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `JWT ${token}`
        }
    })
}
export const updateProfileUsers = async (data: object) => {
    const token = localStorage.getItem("token");
    return fetch(`${import.meta.env.VITE_API_BACKEND}/profile/update`, {
        method : "PUT",
        credentials : "include",
        headers : {
            "Content-Type" : "application/json",
            "Authorization" : `JWT ${token}`
        },
        body : JSON.stringify(data)
    })
}