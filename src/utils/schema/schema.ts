import z from "zod"

export const SchemaAuthRegister = z.object({
    name: z.string().min(1, "Wajib mengisi nama").max(255, "maximal 255 karakter"),
    email: z.string().min(1, "email wajib diisi"),
    password: z.string().min(1, "password wajib diisi").max(10, "maximal 10 karakter")
})

export const SchemaAuthLogin = SchemaAuthRegister.omit({ name: true })

export const SchemaProfileUsers = z.object({
    name: z.string().min(1, "Wajib mengisi nama").max(255, "maximal 255 karakter"),
    email: z.string().min(1, "email wajib diisi"),
    password: z.string().min(1, "password wajib diisi").max(10, "maximal 10 karakter")
})