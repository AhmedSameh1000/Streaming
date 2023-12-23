import { Component, OnInit } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { VideoService } from './video.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  videoUrl: any;

  constructor(
    private videoService: VideoService,
    private sanitizer: DomSanitizer
  ) {}
  ngOnInit() {
    this.LoadVideo();
  }
  LoadVideo() {
    this.videoService.getVideo().subscribe(
      (response: ArrayBuffer) => {
        const videoBlob = new Blob([response], { type: 'video/mp4' });
        const videoUrl = URL.createObjectURL(videoBlob);
        this.videoUrl = this.sanitizer.bypassSecurityTrustUrl(videoUrl);

        console.log(this.videoUrl);
      },

      (error) => {
        console.error('Error loading video:', error);
      }
    );
  }
}
