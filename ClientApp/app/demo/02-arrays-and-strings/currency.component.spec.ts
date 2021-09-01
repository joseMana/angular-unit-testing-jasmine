import { CurrencyComponent } from "./currency.component"

describe('CurrencyComponent', () => {

    describe('getCurrencies', () => {
        let component = new CurrencyComponent();

        it('should return at least one currency', () => {
            let currencies = component.getCurrencies();

            expect(currencies).toBeTruthy();
            expect(currencies.length).toBeGreaterThanOrEqual(1);       
        });
    });

});