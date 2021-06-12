import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ArticlePageComponent } from './article-page/article-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MoreInfoComponent } from './more-info/more-info.component';


const routes: Routes = [
  { path:'' , redirectTo:'home' , pathMatch:'full' },
  { path:'home' , component:HomePageComponent, 
  children : [
    { path:'aboutus' , component:AboutUsComponent },
    { path:'moreinfo' , component:MoreInfoComponent },
    
  ]
},
  { path:'contact' , component:ContactPageComponent },
  { path:'article/:id' , component:ArticlePageComponent },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
