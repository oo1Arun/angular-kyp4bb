import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressBarComponent } from './progress-bar.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { ProgressBarService } from '../../services/progress-bar/progressbar.service';

@NgModule({
  declarations: [ProgressBarComponent],
  imports: [
    CommonModule,
    MatProgressBarModule,
    LoadingBarModule,
    LoadingBarRouterModule
  ],
  exports: [ProgressBarComponent],
  providers: [ProgressBarService],
})
export class ProgressBarModule {
}
