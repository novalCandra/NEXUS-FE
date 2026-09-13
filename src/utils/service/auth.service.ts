export const serviceAuthLogin = async (values : object) => {
    return fetch(`${import.meta.env.VITE_API_BACKEND}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body : JSON.stringify(values)
    })
}

export const serviceAuthRegister = async(values : object) => {
    return fetch(`${import.meta.env.VITE_API_BACKEND}/register`, {
        method : "POST",

        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(values)
    })
}