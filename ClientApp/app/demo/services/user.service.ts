import { HttpClient, HttpHeaders } from '@angular/common/http';

export class UserService {
    
    constructor(private client: HttpClient){}

    public getUsers(callback: Function) {
        let httpOptions = { headers: new HttpHeaders({ 'Accept': 'application/json' }) };
        this.client.get('http://jsonplaceholder.typicode.com/users', httpOptions)
            .subscribe((users) => {
                if(users) {
                    callback(users);
                }
            });
    }
}