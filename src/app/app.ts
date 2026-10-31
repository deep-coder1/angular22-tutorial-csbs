import { Component, computed, effect, signal } from '@angular/core';
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

// // Data Types in Angular 
// export class App {
//   data:any = 20

//   updateData(val:number, user:string){
//     this.data=val
//     console.log(user);

//     console.log(this.sum(10,20));
//   }

//   sum(a:number,b:number):number{
//     return a+b
//   }

//   handleEvent(event:PointerEvent | Event | MouseEvent){
//     console.log(event);
//   }

//   handleEvent2(event:Event){
//     console.log(event);
//   }
// }


// Angular Property Binding 
// export class App {
//   btnDisable=false;
//   inputReadonly=false;
//   url="https://dac.digital/wp-content/uploads/2023/05/angular-logo-1-1920x1920-optimized.png"
  
//   toggle(){
//     this.btnDisable=!this.btnDisable;
//   }
// }


// // Signals 
// export class App {
//   data = 10;
//   count = signal(0)

//   constructor(){
//     effect(()=>{
//       console.log("This is data ", this.data)
//       console.log("This is count ", this.count())
//       if(this.count()==10){
//         this.count.set(0)
//       }
//     })
//   }

//   updateData(){
//     this.data++
//   }

//   updateCount(){
//     this.count.set(this.count()+1)
//   }
// }

// Computed Signals in Angular
// export class App {
//   height = 100;
//   width = 20;
//   area = this.height * this.width;

//   handleHeight(){
//     // this.height += 10;
//     this.height = this.height + 10;
//     this.area = this.height * this.width;
//   }
// }

export class App {
  height = signal(100);
  width = signal(20);
  area = computed(()=> this.height()*this.width())
  constructor(){
    effect(()=>{
      // console.log("area is : ", this.area());
      console.log("is updating?");
    })
  }

  handleHeight(){
    this.height.set(this.height() + 10);
  }
}