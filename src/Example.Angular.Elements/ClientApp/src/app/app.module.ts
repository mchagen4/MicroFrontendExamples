import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule
  ],
  providers: []
})
export class AppModule {
  constructor(injector: Injector) {
    let el = createCustomElement(AppComponent, { injector: injector });
    customElements.define("custom-angular-web-component", el);
  }

  ngDoBootstrap() {
    
  }
 }
