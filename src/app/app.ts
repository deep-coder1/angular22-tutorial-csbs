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
// export class App {
//   name="Deepak Thakur"
//   email="ndktbd@gmail.com"
//   getName(){
//     return this.name;
//   }
//   getValue(a:number,b:number){
//     return a+b;
//   }
// }

// Events Binding 
// export class App {
//   // callMe(){
//   //   alert("Hello Angular 22")
//   // }

//   count = 0;
//   counter(action: string) {
//     if (action == 'minus') {
//       this.count>0 && this.count--;
//     } else {
//       this.count++;
//     }
//     this.showUserName();
//   }

//   showUserName(){
//     alert("Hello");
//   }
// }

// // Events 
// export class App {
//   handleEvent(eventName:string){
//     console.log(eventName);
//   }
// }

// Data Types in Angular 
export class App {
  data:any = 20

  updateData(val:number, user:string){
    this.data=val
    console.log(user);

    console.log(this.sum(10,20));
  }

  sum(a:number,b:number):number{
    return a+b
  }

  handleEvent(event:PointerEvent | Event | MouseEvent){
    console.log(event);
  }

  handleEvent2(event:Event){
    console.log(event);
  }
}