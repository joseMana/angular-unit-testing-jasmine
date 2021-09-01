import { AuthService } from "./auth.service";

describe('AuthService', () => {
    
    describe('isAuthenticated', () => {
        let service: AuthService;

        beforeEach(() => {
            service = new AuthService();
        });
    
        afterEach(() => {
            localStorage.removeItem('token');
        });
    
        it('should return true from isAuthenticated when there is a token', () => {
            localStorage.setItem('token', '1234');
            
            let isAuthenticated = service.isAuthenticated();
    
            expect(isAuthenticated).toBeTruthy();
        });
    
        it('should return false from isAuthenticated when there is no token', () => {       
            let isAuthenticated = service.isAuthenticated();
    
            expect(isAuthenticated).toBeFalsy();
        });
    });
    
});
