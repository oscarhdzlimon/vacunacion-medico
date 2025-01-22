import { jwtDecode } from 'jwt-decode';

export function isTokenValid(token: string): boolean {
  try {

    const decoded: any = jwtDecode(token);
    const currentTime = Math.floor(Date.now() / 1000);
    return decoded.exp > currentTime; // Verifica si el token ha expirado
  } catch (error) {
    return false;
  }
}


export function tokenGetter(): string | null {
  return localStorage.getItem('token');
}

export function tokenSetter(token_ ?:string) {
  return localStorage.setItem('token', token_?token_:"");
}


