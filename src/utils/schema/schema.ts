import z from "zod"

export const SchemaAuthRegister = z.object({
    name: z.string().min(1, "required name").max(255, "maximal 255 karakter"),
    email: z.string().min(1, "email wajib diisi").max(10, "maximal 255 karakter"),
    password: z.string().min(1, "password wajib diisi").max(10, "maximal 10 karakter")
})

export const SchemaAuthLogin = SchemaAuthRegister.omit({ name: true })