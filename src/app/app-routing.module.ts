import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemContentComponent } from './components/item-content/item-content.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';


const routes: Routes = [
  { path: 'Home', component: ItemContentComponent},
  { path: 'ProductDetail/:id', component: ItemDetailComponent},
  { path: '**', redirectTo: 'Home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
