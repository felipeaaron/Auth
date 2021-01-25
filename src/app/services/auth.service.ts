import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { AppComponent } from '.././app.component';

// Import the module from the SDK
import { AuthModule, AuthService } from '@auth0/auth0-angular';



@Component({
      selector: 'app-auth-button',
      template: '<button (click)="auth.loginWithRedirect()">Log in</button>'
    })
    export class AuthButtonComponent {
      // Inject the authentication service into your component through the constructor
      constructor(public auth: AuthService) {}
    }
