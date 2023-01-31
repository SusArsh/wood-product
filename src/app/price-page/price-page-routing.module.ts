import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PricePageComponent } from './price-page.component';

const routes: Routes = [{
  path: '',
  component: PricePageComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PricePageRoutingModule { }
