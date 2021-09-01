import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TokenInterceptor } from './token.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserService } from './user.service';

describe(`AuthHttpInterceptor`, () => {
    let userService: UserService;
    let httpObj: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [
                UserService,
                {
                    provide: HTTP_INTERCEPTORS,
                    useClass: TokenInterceptor,
                    multi: true
                }
            ],
        });

        userService = TestBed.get(UserService);
        httpObj = TestBed.get(HttpTestingController);
    });

    it('should add an Authorization header', () => {
        userService.getUsers().subscribe(response => {
            expect(response).toBeTruthy();
        });
    
        // Expect and return test request instance
        const http = httpObj.expectOne('http://jsonplaceholder.typicode.com/users');
    
        expect(http.request.headers.has('Authorization')).toBeTruthy();
    });

    it('should set Authorization token', () => {
        userService.getUsers().subscribe();
    
        const http = httpObj.expectOne('http://jsonplaceholder.typicode.com/users');
    
        expect(http.request.headers.get('Authorization')).toBe('Bearer token-abc');
    });
});