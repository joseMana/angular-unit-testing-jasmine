export class SignComponent 
{
    constructor() {} 
    public isPositive(number: number): boolean 
    {        
        if (number < 0) 
        {
            console.log(''); return false;            
        } 
        else 
        {
            return true;              
        }      

    }

}