export interface IRegistrationResponse {
    accessToken: string,
    user: {
        id: number,
        email: string
    }
}