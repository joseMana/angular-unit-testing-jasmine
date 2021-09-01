import { LoginComponent } from '../login.component';
import { AuthService } from "../../06-classes-and-pipes/auth.service";
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('LoginComponent', () => {

    describe('template', () => {
        let authService: AuthService;
        let fixture: ComponentFixture<LoginComponent>;
        let el: DebugElement;
        let isAuthenticatedSpy: jasmine.Spy;
    
        beforeEach(() => {
            TestBed.configureTestingModule({
                providers: [AuthService],
                declarations: [LoginComponent]
            })
     
            fixture = TestBed.createComponent(LoginComponent);
    
            //component = fixture.componentInstance;
     
            authService = TestBed.get(AuthService);
            isAuthenticatedSpy = spyOn(authService, 'isAuthenticated');

            // NOTE: use a unique selector as much as possible
            // NOTE: you can also get an array of debugElements
            el = fixture.debugElement.query(By.css('a#auth'));
            
            fixture.detectChanges();
        });
    
        it('should show logout button when the user is authenticated', () => {
            expect(el.nativeElement.textContent.trim()).toContain('Login');
    
            isAuthenticatedSpy.and.returnValue(true);
            
            fixture.detectChanges();
            
            expect(el.nativeElement.textContent.trim()).toContain('Logout');
        });

        it('should show login button when the user is NOT authenticated', () => {
            isAuthenticatedSpy.and.returnValue(false);
            
            fixture.detectChanges();
            
            expect(el.nativeElement.textContent.trim()).toContain('Login');
        });
    });
    
});