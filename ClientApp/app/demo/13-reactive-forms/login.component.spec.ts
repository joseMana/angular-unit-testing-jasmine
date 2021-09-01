import { DebugElement } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { By } from '@angular/platform-browser';
import { LoginComponent, User } from "./login.component";

describe('LoginComponent', () => {

    describe('template', () => {
        let component: LoginComponent;
        let fixture: ComponentFixture<LoginComponent>;
        let submitEl: DebugElement;
    
        beforeEach(() => {
    
            // refine the test module by declaring the test component
            TestBed.configureTestingModule({
                imports: [ReactiveFormsModule],
                declarations: [LoginComponent]
            });
    
            fixture = TestBed.createComponent(LoginComponent);

            component = fixture.componentInstance;

            submitEl = fixture.debugElement.query(By.css('button'));

            component.ngOnInit();

            fixture.detectChanges();
        });
    
        it('form should be invalid', () => {
            expect(component.form.invalid).toBe(true);
        });

        it('form should be valid', () => {
            let email = component.form.controls['email'];
            let password = component.form.controls['password'];

            email.setValue('eduardl@magenic.com');
            password.setValue('123456789');

            expect(component.form.valid).toBe(true);
        });
    
        it('should validate email field', () => {
            let errors = {};
            let email = component.form.controls['email'];
            expect(email.valid).toBeFalsy();
    
            // Email field is required
            errors = email.errors || {};
            expect(errors['required']).toBeTruthy();
    
            // Set email to something
            email.setValue("eduardl");
            errors = email.errors || {};
            expect(errors['required']).toBeFalsy();
            expect(errors['pattern']).toBeTruthy();
    
            // Set email to something correct
            email.setValue("eduardl@magenic.com");
            errors = email.errors || {};
            expect(errors['required']).toBeFalsy();
            expect(errors['pattern']).toBeFalsy();
        });
    
        it('should validate password field', () => {
            let errors = {};
            let password = component.form.controls['password'];
    
            // Email field is required
            errors = password.errors || {};
            expect(errors['required']).toBeTruthy();
    
            // Set email to something
            password.setValue("123456");
            errors = password.errors || {};
            expect(errors['required']).toBeFalsy();
            expect(errors['minlength']).toBeTruthy();
    
            // Set email to something correct
            password.setValue('123456789');
            errors = password.errors || {};
            expect(errors['required']).toBeFalsy();
            expect(errors['minlength']).toBeFalsy();
        });
    
        it('submitting a form emits a user', () => {
            component.form.controls['email'].setValue('eduardl@magenic.com');
            component.form.controls['password'].setValue("123456789");
    
            let user: User;
            // Subscribe to the Observable and store the user in a local variable.
            component.loggedIn.subscribe((value) => user = value);
    
            // Trigger the login function
            component.login();
    
            // Now we can check to make sure the emitted value is correct
            expect(user.email).toBe('eduardl@magenic.com');
            expect(user.password).toBe('123456789');
        });
    });
    
});