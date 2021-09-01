import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component, DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";
import { HoverFocusDirective } from './hover-focus.directive';
import { HoverFocusComponent } from './hover-focus.component';

describe('HoverFocusDirective', () => {

    let fixture: ComponentFixture<HoverFocusComponent>;
    let inputEl: DebugElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                HoverFocusComponent,
                HoverFocusDirective
            ]
        });

        fixture = TestBed.createComponent(HoverFocusComponent);

        inputEl = fixture.debugElement.query(By.css('input'));
    });

    it('should change background color to blue on mouse over', () => {
        inputEl.triggerEventHandler('mouseover', null);
        fixture.detectChanges();
        expect(inputEl.nativeElement.style.backgroundColor).toBe('blue');
    });

    it('should remove background color on mouse out', () => {
       
        inputEl.triggerEventHandler('mouseout', null);
        fixture.detectChanges();
        expect(inputEl.nativeElement.style.backgroundColor).toBe('transparent');
    });

});