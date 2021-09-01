import { LoginComponent } from '../login.component';
import { AuthService } from "../../06-classes-and-pipes/auth.service";

describe('LoginComponent', () => {

    describe('needsLogin', () => {
        let component: LoginComponent;
        let authService: AuthService;
        let isAuthenticatedSpy: any;

        beforeEach(() => {
            authService = new AuthService();
            component = new LoginComponent(authService);
            isAuthenticatedSpy = spyOn(authService, 'isAuthenticated');
        });

        it('should return false when the user is not authenticated', () => {
            isAuthenticatedSpy.and.returnValue(false);
            
            const needsLogin = component.needsLogin();

            expect(needsLogin).toBeTruthy();
            expect(authService.isAuthenticated).toHaveBeenCalled();
        });

        it('should return false when the user is not authenticated', () => {
            isAuthenticatedSpy.and.returnValue(true);
            
            const needsLogin = component.needsLogin();

            expect(needsLogin).toBeFalsy();
            expect(authService.isAuthenticated).toHaveBeenCalled();
        });
    });

});
