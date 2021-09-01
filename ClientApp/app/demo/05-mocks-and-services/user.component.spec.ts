import { UserComponent } from "./user.component"
import { UserService } from "../services/user.service";
import { User } from "../models/user.model";

describe('UserComponent', () => {

    describe('initializeUsers', () => {
        const mockUsers: User[] = [
            new User(1, 'Eduard', 'eduardl@magenic.com'),
            new User(2, 'Aaron', 'aaronf@magenic.com')
        ];
        
        let mockUserService: UserService;
        let component: UserComponent;
        let getUsersSpy: jasmine.Spy;

        beforeEach(()=> {
            mockUserService = new MockUserService() as UserService;

            component = new UserComponent(mockUserService);

            getUsersSpy = spyOn(mockUserService, 'getUsers');            
        });

        xit('should call the getUsers function', () => {
            // Act
            component['initializeUsers']();
        
            //Assert
            expect(getUsersSpy).toHaveBeenCalled();
        });

        it('should set users if service returns list', () => {
            //Arrange
            // getUsersSpy.and.returnValue(mockUsers);
            getUsersSpy.and.callFake((callback) => { callback(mockUsers) });

            //Act
            component['initializeUsers']();
        
            //Assert
            expect(component.users).toEqual(mockUsers);
            expect(component.users.length).toBeGreaterThan(0);
        });

        xit('should not set users if service returns null', () => {
            //Arrange
            getUsersSpy.and.callFake((callback) => { callback(null) })

            //Act
            component['initializeUsers']();
        
            //Assert
            expect(component.users).toBeUndefined();
        });
    });
 
});

class MockUserService {
    getUsers(callback) { callback() }
}