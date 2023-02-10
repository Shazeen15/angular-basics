// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {os/id/237/500/500.jpg?hmac
//   title = 'basics';
// }
import { Component } from "@angular/core";


@Component({
  selector: 'app-root',
  // template: `<p>Hello Owl<p>`,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // styles:
})
export class AppComponent {
  name = "Shazeen"
  imgUrl = "https://fastly.picsum.photos/id/237/500/500.jpg?hmac=idOEkrJhLd7nEU5pNrAGCyJ6HHJdR_sit1qDt5J3Wo0"

  getName(){
    return this.name
  }

  changeImage(e: KeyboardEvent) {
    this.imgUrl = (e.target as HTMLInputElement).value
  }

  logImg(event: string) {
    console.log(event)
    console.log("log img method is working")
  }
}