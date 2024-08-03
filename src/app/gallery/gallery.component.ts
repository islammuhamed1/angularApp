import { Component } from '@angular/core';
import { Igallery } from '../igallery';
import { RecommendComponent } from "../recommend/recommend.component";

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [RecommendComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css',
})
export class GalleryComponent {
  gallery: Igallery[] = [
    { imgSrc: './assets/imgs/11.jpg' },
    { imgSrc: './assets/imgs/22.jpg' },
    { imgSrc: './assets/imgs/33.jpg' },
    { imgSrc: './assets/imgs/44.jpg' },
    { imgSrc: './assets/imgs/55.jpg' },
    { imgSrc: './assets/imgs/66.jpg' },
  ];
}
