// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {os/id/237/500/500.jpg?hmac
//   title = 'basics';
// }
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // template: `<p>Hello Owl<p>`,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // styles:
})
export class AppComponent {
  name = 'shazeen';
  imgUrl =
    'https://media.os.fressnapf.com/cms/2020/07/ratgeber_hund_rasse_portraits_shih-tzu_1200x527.jpg?t=seoimg_937';

  images = [
    'https://www.petful.com/wp-content/uploads/2012/03/shih-tzu.jpg',
    'https://www.allthingsdogs.com/wp-content/uploads/2021/12/cute-shih-tzu.jpg',
    'https://s36700.pcdn.co/wp-content/uploads/2017/04/iStock-shihtzu_thumb-600x400.jpg.optimal.jpg',
  ];
  currentDate = new Date();
  cost = 2000;
  temperature = 25.3;
  pizza = {
    toppings: ['pineapple', 'mushroom'],
    size: 'large',
  };

  blueClass = false;
  fontSize = 16;

  getName() {
    return this.name;
  }

  changeImage(e: KeyboardEvent) {
    this.imgUrl = (e.target as HTMLInputElement).value;
  }

  logImg(event: string) {
    console.log(event);
    console.log('log img method is working');
  }
}
