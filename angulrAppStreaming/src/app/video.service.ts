import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class VideoService {
  private apiUrl = 'https://localhost:7164/api/Video';

  constructor(private http: HttpClient) {}

  getVideo(): Observable<ArrayBuffer> {
    return this.http.get(this.apiUrl, {
      responseType: 'arraybuffer',
    });
  }
}
