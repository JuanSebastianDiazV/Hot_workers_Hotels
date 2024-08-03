import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ComponentsModule } from '../app/components/components.module';
import { AuthInterceptor } from './services/interceptors/auth/auth.interceptor'; 
import { AuthService } from './services/auth-service/auth.service'; 
import { LoginService } from './services/login/login-service.service';
import { NumberFormatPipe } from './pipes/number-format/number-format.pipe';
import { UserRegistrationService } from './services/user-registration/user-registration.service';


@NgModule({
  declarations: [AppComponent, NumberFormatPipe],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    ComponentsModule
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    AuthService,
    LoginService,
    UserRegistrationService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
