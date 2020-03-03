import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { PageNotfoundComponent } from './page-not-found.component';

const routes: Routes = [
  {
    path: '',
    component: PageNotfoundComponent,
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class PageNotFoundRoutingModule { }
