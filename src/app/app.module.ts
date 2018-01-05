import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MainContainerComponent } from './components/main-container/main-container.component';
import { OuterComponent } from './components/outer/outer.component';
import { InnerComponent } from './components/inner/inner.component';


@NgModule({
  declarations: [
    AppComponent,
    MainContainerComponent,
    OuterComponent,
    InnerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
