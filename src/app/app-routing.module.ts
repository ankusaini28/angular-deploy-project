import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestRoutingComponent } from './test-routing/test-routing.component';

const routes: Routes = [
  {
    path: 'test', component: TestRoutingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
