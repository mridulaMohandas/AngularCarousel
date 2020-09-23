import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SlideDataService {
  getSlides(): object{
    return  [
      { url: 'assets/images/slide.JPG', text: 'Mobile internet', link: 'https://www.google.com'},
      { url: 'assets/images/slide.JPG', text: 'Home internet', link: ''},
      { url: 'assets/images/slide.JPG', text: 'Get a device', link: ''},
      { url: 'assets/images/slide.JPG', text: 'Add a phone-line', link: ''},
      { url: 'assets/images/slide.JPG', text: 'Upgrade', link: ''}
    ];
  }
}
