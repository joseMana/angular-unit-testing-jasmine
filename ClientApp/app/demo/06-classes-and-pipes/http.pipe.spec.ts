import { HttpPipe } from "./http.pipe";

describe('HttpPipe', () => {

    describe('transform', () => {
        let pipe: HttpPipe;

        beforeEach(() => {
            pipe = new HttpPipe();
        });
    
        it('should return value if value is provided', () => {
            const url = pipe.transform('http://eduard.lu', 'fallback');

            expect(url).toBe('http://eduard.lu');
        });
    
        it('should return fallback if value is not provided', () => {
            const url = pipe.transform('', 'http://eduard.lu');

            expect(url).toBe('http://eduard.lu');
        });

        it('should return value if value is provided and forceHttps is false', () => {
            const url = pipe.transform('http://eduard.lu', '', false);

            expect(url).toBe('http://eduard.lu');
        });

        it('should return fallback if value is not provided and forceHttps is false', () => {
            const url = pipe.transform('', 'http://eduard.lu', false);

            expect(url).toBe('http://eduard.lu');
        });
    
        it('should return https if forceHttps is true', () => {
            const url = pipe.transform('http://eduard.lu', '', true);

            expect(url).toBe('https://eduard.lu');
        });
    
        it('should return https if forceHttps is true and url is already in https', () => {
            const url = pipe.transform('https://eduard.lu', '', true);

            expect(url).toBe('https://eduard.lu');
        });
    });
});