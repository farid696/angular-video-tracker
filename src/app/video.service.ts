import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Video } from './app-types';

const apiUrl = 'https://api.angularbootcamp.com';

@Injectable({
  providedIn: 'root',
})
export class VideoService {
  constructor(private http: HttpClient) {}

  loadVideos(): Observable<Video[]> {
    return this.http.get<Video[]>(apiUrl + '/videos').pipe(
      map((videos) => [
        ...videos,
        {
          title: 'Added from map!',
          author: 'map',
          id: 'aa',
          viewDetails: [],
        },
      ]),
      map((videos) =>
        videos.map((video) => ({ ...video, title: video.title.toUpperCase() }))
      )
    );
  }
  loadSingleVideo(id: string): Observable<Video> {
    return this.http.get<Video>(apiUrl + '/videos/' + id);
  }
}
