import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap, filter } from 'rxjs/operators';

import { Video } from '../../app-types';
import { VideoService } from '../../video.service';

@Component({
  selector: 'app-video-dashboard',
  templateUrl: './video-dashboard.component.html',
  styleUrls: ['./video-dashboard.component.scss'],
})
export class VideoDashboardComponent implements OnInit {
  selectedVideo: Observable<Video>;
  videoList: Observable<Video[]>;

  constructor(videoSvc: VideoService, route: ActivatedRoute) {
    this.videoList = videoSvc.loadVideos();

    this.selectedVideo = route.queryParamMap.pipe(
      map((params) => params.get('videoId') as string),
      filter((id) => !!id),
      switchMap((id) => videoSvc.loadSingleVideo(id))
    );
  }

  ngOnInit(): void {}
}
