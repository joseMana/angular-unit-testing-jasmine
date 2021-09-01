import { SeasonComponent } from "./season.component"

describe('SeasonComponent', () => {

    describe('getNextSeason', () => {
        let component: SeasonComponent;
        let nextSeasonSpy: jasmine.Spy;
    
        beforeEach(() => {
            component = new SeasonComponent();
            nextSeasonSpy = spyOn<any>(component, 'nextSeason');
        });
    
        it('should call the nextSeason function', () => {
            component.getNextSeason();
    
            expect(nextSeasonSpy).toHaveBeenCalled();
        });
    
        xit('should return Summer', () => {
            let season = component.getNextSeason();
    
            expect(season).toBe('Summer');
        });
    
        it('should return Summer', () => {
            nextSeasonSpy.and.callThrough();
    
            let season = component.getNextSeason();
    
            expect(season).toBe('Summer');
        });
    
        it('should return Winter instead of Summer', () => {
            nextSeasonSpy.and.returnValue('Winter');
    
            let season = component.getNextSeason();
    
            expect(season).not.toBe('Summer');
            expect(season).toBe('Winter');
        });
    })
    
})