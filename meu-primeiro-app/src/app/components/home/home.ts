import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  meunome = "Daniel";

  mudaNome(event:any) {
    this.meunome = "Baumann";
    console.log(event);
  }
}
