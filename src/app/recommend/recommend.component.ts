import { Component } from '@angular/core';
import { Igallery } from '../igallery';

@Component({
  selector: 'app-recommend',
  standalone: true,
  imports: [],
  templateUrl: './recommend.component.html',
  styleUrl: './recommend.component.css'
})
export class RecommendComponent {
  gallery: Igallery[] = [
    { imgSrc: './assets/imgs/11.jpg' },
    { imgSrc: './assets/imgs/22.jpg' },
    { imgSrc: './assets/imgs/33.jpg' },
    { imgSrc: './assets/imgs/44.jpg' },
    { imgSrc: './assets/imgs/55.jpg' },
    { imgSrc: './assets/imgs/66.jpg' },
  ];
}
