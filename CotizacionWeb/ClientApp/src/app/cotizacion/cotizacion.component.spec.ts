/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { CotizacionComponent } from './cotizacion.component';

let component: CotizacionComponent;
let fixture: ComponentFixture<CotizacionComponent>;

describe('cotizacion component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ CotizacionComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(CotizacionComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});