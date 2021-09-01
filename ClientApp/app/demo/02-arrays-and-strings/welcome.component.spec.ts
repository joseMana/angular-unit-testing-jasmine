import { WelcomeComponent } from "./welcome.component"

describe('WelcomeComponent', () => {

    describe('greet', () => {
        let component = new WelcomeComponent();

        it('should include the name on the message', () => {
            let message = component.greet('Eduard');

            expect(message).toContain('Eduard');
        });
    });

});