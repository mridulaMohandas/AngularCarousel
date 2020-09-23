import { Component } from '@angular/core';
import { CarouselComponent } from './carousel/carousel.component';
import { SlideDataService } from './slide-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CarouselDemo';
  heading = 'What are you <b>here to do?</b>';
  slides;
  constructor(public slideDataService: SlideDataService){
    this.slides = slideDataService.getSlides();
  }
}
