import { TestBed, ComponentFixture, inject } from '@angular/core/testing';
import { LoginComponent } from '../09-async-code/login.component';
import { AuthService } from '../09-async-code/auth.service';

describe('LoginComponent', () => {

    describe('dependencies', () => {
        let fixture: ComponentFixture<LoginComponent>;
        let authService: AuthService;
    
        beforeEach(() => {
    
            // refine the test module by declaring the test component
            TestBed.configureTestingModule({
                declarations: [LoginComponent],
                providers: [AuthService]
            });
    
            // create component and test fixture
            fixture = TestBed.createComponent(LoginComponent);
    
            // AuthService provided to the TestBed
            authService = TestBed.get(AuthService);
        });
    
        it('Service injected via inject(...) and TestBed.get(...) should be the same instance',
            inject([AuthService], (injectService: AuthService) => {
                expect(injectService).toEqual(authService);
            })
        );
    });

});
