import { LoginComponent, User } from './login.component';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('LoginComponent', () => {

    describe('template', () => {
        let component: LoginComponent;
        let fixture: ComponentFixture<LoginComponent>;

        let loginEl: DebugElement;
        let passwordEl: DebugElement;
        let submitEl: DebugElement;

        beforeEach(() => {
            TestBed.configureTestingModule({
                declarations: [LoginComponent]
            })
    
            fixture = TestBed.createComponent(LoginComponent);

            component = fixture.componentInstance;

            loginEl = fixture.debugElement.query(By.css('input[type=email]'));
            passwordEl = fixture.debugElement.query(By.css('input[type=password]'));
            submitEl = fixture.debugElement.query(By.css('button'));

            fixture.detectChanges();
        });

        it('should disable the submit button when enabled is set to false', () => {
            component.enabled = false;
            fixture.detectChanges();
            expect(submitEl.nativeElement.disabled).toBe(true);
        });
        
        it('should enable the submit button when enabled is set to true', () => {
            component.enabled = true;
            fixture.detectChanges();
            expect(submitEl.nativeElement.disabled).toBe(false);
        });

        it('should emit loggedIn event if email and password are provided', () => {
            let emittedUser: User;
            loginEl.nativeElement.value = 'eduard.lu@ey.com';
            passwordEl.nativeElement.value = '12345';

            // subscribe first
            component.loggedIn
                // .pipe(
                //     take(1)
                // )    
                .subscribe((value) => emittedUser = value);

            submitEl.triggerEventHandler('click', null);

            expect(emittedUser.email).toBe('eduard.lu@ey.com');
            expect(emittedUser.password).toBe('12345');
        });

        it('should not emit loggedIn event if email and password are not provided', () => {
            let emittedUser: User;
            loginEl.nativeElement.value = '';
            passwordEl.nativeElement.value = '';

            // subscribe first
            component.loggedIn.subscribe((value) => emittedUser = value);

            submitEl.triggerEventHandler('click', null);

            expect(emittedUser).toBeFalsy();
        });
    });
    
});