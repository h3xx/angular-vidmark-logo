import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LogoComponent } from './logo/logo.component';
import { TestPageComponent } from './test-page/test-page.component';

@NgModule({
    bootstrap: [AppComponent],
    declarations: [
        AppComponent,
        LogoComponent,
        TestPageComponent,
    ],
    imports: [
        BrowserModule,
    ],
    providers: [],
})
export class AppModule { }
