import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { VideoDashboardComponent } from './video-dashboard/video-dashboard.component';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { StatFiltersComponent } from './stat-filters/stat-filters.component';
import { VideoCardComponent } from './video-card/video-card.component';
import { ReactiveFormsModule } from '@angular/forms';

const dashboardRoutes: Routes = [
  { path: '', component: VideoDashboardComponent },
];

@NgModule({
  declarations: [
    VideoDashboardComponent,
    VideoListComponent,
    VideoPlayerComponent,
    StatFiltersComponent,
    VideoCardComponent,
   
  ],
  imports: [CommonModule, RouterModule.forChild(dashboardRoutes), ReactiveFormsModule],
})
export class DashboardModule {}
