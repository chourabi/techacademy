import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path:'', redirectTo: "products", pathMatch:'full' },
  { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
   { path: 'magazins', loadChildren: () => import('./magazins/magazins.module').then(m => m.MagazinsModule) },
  { path: 'purchases', loadChildren: () => import('./purchase/purchase.module').then(m => m.PurchaseModule) }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
