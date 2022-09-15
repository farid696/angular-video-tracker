import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Video } from './app-types';

@Injectable({
  // This service should be created
  // by the root application injector.
  providedIn: 'root',
})
export class VideoService {
  constructor(private http: HttpClient) {}
  loadVideos(): Observable<Video[]> {
    return this.http.get<Video[]>('https://api.angularbootcamp.com/videos');
  }
}
