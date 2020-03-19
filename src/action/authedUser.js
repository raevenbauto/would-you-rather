export const SET_AUTH_USER = "SET_AUTH_USER";

export default function setAuthedUser(userId) {
    return {
        userId,
        type: SET_AUTH_USER
    };
}