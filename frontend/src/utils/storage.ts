import history from './history';

type LoginResponse = {
    access_token: string;
    token_type: string;
    expires_in: Number;
    scope: string;
    userName: string;
    userId: Number;
}

const tokenKey = 'authData';

export const saveAuthData = (obj: LoginResponse) => {
    localStorage.setItem(tokenKey, JSON.stringify(obj));
}

export const getAuthData = () => {
    const sessionData = localStorage.getItem(tokenKey) ?? '{}';
    const parseSessionData = JSON.parse(sessionData)
    return parseSessionData as LoginResponse;
}
// REMOVER DADOS DE LOGIN DO LOCALSTORAGE
export const removeAuthData = () => {
    localStorage.removeItem('authData')
    history.replace('/auth/login')
}