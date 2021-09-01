import { Observable, of } from "rxjs";

export class AuthService {
    isAuthenticated(): Promise<boolean> {
        return Promise.resolve(!!localStorage.getItem('token'));
    }

    isLoggedIn(): Observable<boolean> {
        return of(!!localStorage.getItem('token'));
    }
}