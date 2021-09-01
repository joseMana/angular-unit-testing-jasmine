export class VoteComponent {
    public voteCount: number = 0;

    constructor() { }

    public upVote(): void {
        this.voteCount++;
    }

    public downVote(): void {        
        this.voteCount--;
    }
}
