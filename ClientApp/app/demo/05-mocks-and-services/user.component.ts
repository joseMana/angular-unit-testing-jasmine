import { UserService } from '../services/user.service';
import { User } from '../models/user.model';

export class UserComponent {

    constructor(private userService: UserService) { } 

    public users: User[];

    private initializeUsers(): void {
        this.userService.getUsers((users: User[]) => {
            if(users) {
                this.users = users;
            }    
        });
    }

}