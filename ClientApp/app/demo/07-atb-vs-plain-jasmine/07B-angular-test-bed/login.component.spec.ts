import { LoginComponent } from '../login.component';
import { AuthService } from "../../06-classes-and-pipes/auth.service";
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { CommonModule } from '@angular/common';

describe('Component: Login', () => {

    let component: LoginComponent;
    let authService: AuthService;
    let fixture: ComponentFixture<LoginComponent>;
    let spy: jasmine.Spy;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AuthService],
            declarations: [LoginComponent]
        });
 
        fixture = TestBed.createComponent(LoginComponent);

        component = fixture.componentInstance;
 
        authService = TestBed.get(AuthService);
    });

    it('should return false when the user is not authenticated', () => {
        spy = spyOn(authService, 'isAuthenticated').and.returnValue(false);
        
        const needsLogin = component.needsLogin();

        expect(needsLogin).toBeTruthy();
        expect(authService.isAuthenticated).toHaveBeenCalled();
    });

    it('should return true when the user is not authenticated', () => {
        spy = spyOn(authService, 'isAuthenticated').and.returnValue(true);
        
        const needsLogin = component.needsLogin();

        expect(needsLogin).toBeFalsy();
        expect(authService.isAuthenticated).toHaveBeenCalled();
    });
});