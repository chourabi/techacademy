import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PasswordPipe } from './password.pipe';
import { DeletewsPipe } from './deletews.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { MainNavigationComponent } from './main-navigation/main-navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    PasswordPipe,
    DeletewsPipe,
    MenuItemComponent,
    MainNavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
