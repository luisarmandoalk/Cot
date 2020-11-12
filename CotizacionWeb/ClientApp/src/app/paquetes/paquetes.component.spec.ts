/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { PaquetesComponent } from './paquetes.component';

let component: PaquetesComponent;
let fixture: ComponentFixture<PaquetesComponent>;

describe('paquetes component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ PaquetesComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(PaquetesComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});