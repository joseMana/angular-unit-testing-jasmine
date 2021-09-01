import { VoteComponent } from "./vote.component"

describe('VoteComponent', () => {

    let component: VoteComponent; 

    beforeEach(() => {
        component = new VoteComponent();
    });

    // afterEach
    // beforeAll
    // afterAll

    it('should upVote', () => {
        component.upVote();

        expect(component.voteCount).toBe(1);        
    });

    it('should downVote', () => {
        component.downVote();

        expect(component.voteCount).toBe(-1);          
    });

})