import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';

import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

import { FakeDbService } from './fake-db/fake-db.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    HttpClientModule,
    InMemoryWebApiModule.forRoot(FakeDbService, {
      delay: 0,
      passThruUnknownUrl: true
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
