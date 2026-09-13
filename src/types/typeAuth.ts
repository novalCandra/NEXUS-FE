export interface AuthState {
    token: string | null;
    user: object | null;
    status: "idle" | "loading" | "success" | "failed";
    error: string | null;
}