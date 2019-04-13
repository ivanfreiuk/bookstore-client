import { NavbarComponent } from './navbar/navbar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
    declarations: [
        NavbarComponent,
        LoginComponent,
        HomeComponent,
        HeaderComponent,
        FooterComponent,
        RegisterComponent
    ],
    imports: [
        AppRoutingModule,
        CommonModule,
        ReactiveFormsModule
    ],
    exports: [
        NavbarComponent,
        LoginComponent,
        HeaderComponent,
        FooterComponent,
        RegisterComponent
    ]
})
export class ComponentsModule { }
