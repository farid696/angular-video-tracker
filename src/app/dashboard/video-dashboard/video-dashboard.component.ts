import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Video } from '../../app-types';
import { VideoService } from '../../video.service';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-video-dashboard',
  templateUrl: './video-dashboard.component.html',
  styleUrls: ['./video-dashboard.component.scss'],
})
export class VideoDashboardComponent implements OnInit {
  selectedVideo: Video | undefined;
  videoList:Observable<Video[]>;
  
  constructor(svc: VideoService) {

    this.videoList = svc.loadVideos()
    .pipe(tap((videos) => this.setSelectedVideo(videos[0])));
  }
  

  ngOnInit(): void {}

  setSelectedVideo(video: Video) {
    this.selectedVideo = video;
  }
}
