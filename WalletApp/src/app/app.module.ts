import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {HttpInterceptorService} from '@shared/service/http.interceptor';
import {AuthService} from '@security/service/auth.service';
import {SidenavComponent} from "./modules/sidenav/sidenav.component";
import { SkillsComponent } from './modules/skills/skills.component';

//Material
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatButtonModule} from "@angular/material/button";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import {MatTableModule} from "@angular/material/table";
import { HomepageComponent } from './pages/homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    SkillsComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,

    //Material
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatSlideToggleModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatIconModule,
    MatListModule,
    MatTableModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true
  },
    AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
