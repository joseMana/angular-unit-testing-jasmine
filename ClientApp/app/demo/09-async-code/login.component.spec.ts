import { LoginComponent } from './login.component';
import { TestBed, ComponentFixture, fakeAsync, tick, flush } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { AuthService } from './auth.service';
import { of } from 'rxjs';

describe('LoginComponent', () => {

    describe('template', () => {
        let component: LoginComponent;
        let authService: AuthService;
        let fixture: ComponentFixture<LoginComponent>;
        let spy: jasmine.Spy;
        let el: DebugElement;
    
        beforeEach(() => {
            TestBed.configureTestingModule({
                declarations: [LoginComponent],
                providers: [AuthService]
            })
     
            fixture = TestBed.createComponent(LoginComponent);
    
            component = fixture.componentInstance;
    
            authService = TestBed.get(AuthService);
    
            el = fixture.debugElement.query(By.css('a#auth'));
        });
    
        xdescribe('Promise', () => {
            it('should display logout via jasmine.done', (done: DoneFn) => {
                spy = spyOn(authService, 'isAuthenticated').and.returnValue(Promise.resolve(true));
        
                component.ngOnInit();
        
                spy.calls.mostRecent().returnValue.then(() => {
                    fixture.detectChanges();
                    expect(el.nativeElement.textContent.trim()).toBe('Logout');
                    done();
                });        
            });
        
            it('should display logout via fakeAsync', fakeAsync(() => {
                spy = spyOn(authService, 'isAuthenticated').and.returnValue(Promise.resolve(true));
        
                component.ngOnInit();
        
                tick();
                fixture.detectChanges();
                expect(el.nativeElement.textContent.trim()).toBe('Logout');        
            }));
            
            it('should display logout via jasmine.done', (done: DoneFn) => {
                spy = spyOn(authService, 'isAuthenticated').and.returnValue(Promise.resolve(false));
        
                component.ngOnInit();
        
                spy.calls.mostRecent().returnValue.then(() => {
                    fixture.detectChanges();
                    expect(el.nativeElement.textContent.trim()).toBe('Login');
                    done();
                });        
            });
        
            it('should display logout via fakeAsync', fakeAsync(() => {
                spy = spyOn(authService, 'isAuthenticated').and.returnValue(Promise.resolve(false));
        
                component.ngOnInit();
        
                tick();
                fixture.detectChanges();
                expect(el.nativeElement.textContent.trim()).toBe('Login');        
            }));
        });
        
        describe('Observable', () => {
            it('button label via jasmine.done', (done: DoneFn) => {
                spy = spyOn(authService, 'isLoggedIn').and.returnValue(of(true));
        
                component.ngOnInit();
        
                spy.calls.mostRecent().returnValue.subscribe(() => {
                    fixture.detectChanges();
                    expect(el.nativeElement.textContent.trim()).toContain('Logout');
                    done();
                });        
            });
        
            it('button label via fakeAsync', fakeAsync(() => {
                spy = spyOn(authService, 'isLoggedIn').and.returnValue(of(true));
        
                component.ngOnInit();
        
                // triggers subscription
                tick();
                fixture.detectChanges();
                
                expect(el.nativeElement.textContent.trim()).toContain('Logout');        
            }));
            
            it('button label via jasmine.done', (done: DoneFn) => {
                spy = spyOn(authService, 'isLoggedIn').and.returnValue(of(false));
        
                component.ngOnInit();
        
                spy.calls.mostRecent().returnValue.subscribe(() => {
                    fixture.detectChanges();
                    expect(el.nativeElement.textContent.trim()).toContain('Login');
                    done();
                });        
            });
        
            it('button label via fakeAsync', fakeAsync(() => {
                spy = spyOn(authService, 'isLoggedIn').and.returnValue(of(false));
        
                component.ngOnInit();
        
                tick();
                fixture.detectChanges();
                
                expect(el.nativeElement.textContent.trim()).toContain('Login');        
            }));
        })

    }); 
    
});


  