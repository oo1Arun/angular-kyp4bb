import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { PageNotFoundRoutingModule } from './page-not-found.routing.module';
import { PageNotfoundComponent } from './page-not-found.component';

@NgModule({
  declarations: [PageNotfoundComponent],
  imports: [CommonModule,PageNotFoundRoutingModule],
  exports:[PageNotfoundComponent],
  providers: [],
})
export class PageNotFoundModule { }
