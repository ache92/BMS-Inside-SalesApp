import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';


import { routing, appRoutingProviders } from './app.routing';
import { HttpClientModule } from '@angular/common/http';

import { SidebarComponent } from './components/sidebar/sidebar.component';
import { QueueComponent } from './partials/queue/queue.component';
import { CallInfoComponent } from './partials/call-information/call-information.component';
import { TextareaAutoresizeDirective } from './directives/resize.directive';


@NgModule({
  declarations: [
    AppComponent,

    SidebarComponent,
    QueueComponent,
    CallInfoComponent,
    TextareaAutoresizeDirective

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
