import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Profile } from './profile/profile';

@Component({
  imports: [RouterOutlet, Profile],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
  // template:`<h1>Inline Template {{name}}<h1>`,
})
export class App {
  name="Deepak Thakur"
  email="ndktbd@gmail.com"
  getName(){
    return this.name;
  }
  getValue(a:number,b:number){
    return a+b;
  }
}
