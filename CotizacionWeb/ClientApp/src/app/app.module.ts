import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { PersonasComponent } from './personas/personas.component';
import { CotizacionComponent } from './cotizacion/cotizacion.component';
import { DetailComponent } from './detail/detail.component';
import { ProductoComponent } from './producto/producto.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    PersonasComponent,
        CotizacionComponent,
        DetailComponent,
        ProductoComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
        { path: 'fetch-data', component: FetchDataComponent },
        { path: 'personas', component: PersonasComponent },
        { path: 'cotizacion', component: CotizacionComponent },
        { path: 'detail', component: DetailComponent },
        { path: 'productos', component: ProductoComponent },
        
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
