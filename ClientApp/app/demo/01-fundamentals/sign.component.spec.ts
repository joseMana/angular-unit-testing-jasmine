import { SignComponent } from "./sign.component"

describe('SignComponent', () => {

    describe('isPositive', () => {
        let component = new SignComponent();

        it('should return false if input is negative', () => {        
            let result = component.isPositive(-1);
            
            expect(result).toBe(false);
            expect(result).toEqual(false);
            expect(result).toBeFalsy();
        });
    
        it('should return true if input is positve', () => {                   
            let result = component.isPositive(1);
            
            expect(result).toBe(true);
            expect(result).toEqual(true);
            expect(result).toBeTruthy();
        });
    });
    
});