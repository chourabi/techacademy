import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PasswordPipe } from './password.pipe';
import { DeletewsPipe } from './deletews.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { MainNavigationComponent } from './main-navigation/main-navigation.component';
import { ViewAComponent } from './view-a/view-a.component';
import { ViewBComponent } from './view-b/view-b.component';
import { ViewCComponent } from './view-c/view-c.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { MoreInfoComponent } from './more-info/more-info.component';
import { ArticlePageComponent } from './article-page/article-page.component';
import { ProduitsComponent } from './produits/produits.component';
import { ProduitDetailsComponent } from './produit-details/produit-details.component';

@NgModule({
  declarations: [
    AppComponent,
    PasswordPipe,
    DeletewsPipe,
    MenuItemComponent,
    MainNavigationComponent,
    ViewAComponent,
    ViewBComponent,
    ViewCComponent,
    HomePageComponent,
    ContactPageComponent,
    AboutUsComponent,
    MoreInfoComponent,
    ArticlePageComponent,
    ProduitsComponent,
    ProduitDetailsComponent
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
