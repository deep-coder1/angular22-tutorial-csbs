import { Component, computed, effect, Signal, signal, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Profile } from './profile/profile';
import { UserData } from './user-data/user-data';
import { AdminData } from './admin-data/admin-data';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  imports: [RouterOutlet, Profile, UserData, AdminData, FormsModule, CommonModule],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
  // template:`<h1>Inline Template {{name}}<h1>`,
  // styleUrls:["./app.css","./common.css"],
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

// export class App {
//   height = signal(100);
//   width = signal(20);
//   area = computed(()=> this.height()*this.width())
//   constructor(){
//     effect(()=>{
//       // console.log("area is : ", this.area());
//       console.log("is updating?");
//     })
//   }

//   handleHeight(){
//     this.height.set(this.height() + 10);
//   }
// }

// // Effect in Angular
// export class App {
//   speed = signal(0)
//   fruit=signal("apple")
//   color="black"

//   constructor(){
//     effect(()=>{
//       if(this.speed()>0 && this.speed()<80){
//         this.color="green"
//       }
//       if(this.speed()>80 && this.speed()<120){
//         this.color="orange"
//       }
//       if(this.speed()>=120){
//         this.color="red"
//       }
//       console.log("speed : ", this.speed());
//     })

//     effect(()=> {
//       console.log(this.fruit())
//     })
//   }

//   increaseSpeed(){
//     this.speed.set(this.speed()+10)
//   }

//   changeFruit(){
//     this.fruit.set('banana')
//   }
// }

// Angular Signals Data Types
// export class App {
//   data:WritableSignal<string | number | boolean> = signal<string | number | boolean>("deepak");
//   // speed = computed(()=> this.data() === "deepak" ? 100 : 0);
//   users:WritableSignal<string[]> = signal<string[]>(["deepak", "thakur", "ndktbd"]);
//   speed:Signal<number> = computed<number>(()=>90)

//   handleData() {
//     // this.data.set("thakur");
//     this.users.update((item)=>[...item, "sandeep"])
//     console.log(this.users());
//   }
// }

// // Get and Set Values with Input Fields
// export class App {
//   name:WritableSignal<string> = signal('')

//   resetValue(){
//     this.name.set('Deepak Thakur')
//   }

//   setValue(val:string){
//     this.name.set(val)
//   }
// }

// // Style Options and Rules in Angular 22
// export class App{

// }

// // Angular 22 Control Flow Statements
// export class App{
//   isLogin = signal(false)
//   show = signal(true)
//   status = signal('error')

//   handleLogin(status:boolean){
//     this.isLogin.set(status)
//   }

//   handleStatus(event:Event){
//     let target = event.target as HTMLSelectElement;
//     this.status.set(target.value)
//   }
// }

// // @for and For Loop in Angular
// export class App{
//   users = signal(["Deepak", "Sam", "Peter", "Bruce"])
//   usersDetail = signal([
//     {id:1, name:"Deepak", surname:"Thakur", email:"deepak@example.com"},
//     {id:2, name:"Sam", surname:"Singh", email:"sam@test.com"},
//     {id:2, name:"Peter", surname:"Rana", email:"pater@test.com"},
//     {id:2, name:"Bruce", surname:"Yadav", email:"rahubruce@test.com"},
//   ])
// }

// // @switch and Switch Statement in Angular
// export class App{
//   status = signal("notStarted")
//   handleSwitch(event:Event){
//     let target = event.target as HTMLSelectElement;
//     this.status.set(target.value)
//   }
// }

// // Two-Way Data Binding
// export class App{
//   // name = signal("Deepak Thakur")
//   // age=25

//   userData=signal({
//     name:"deepak thakur",
//     age:14,
//     email:"deepak@test.com"
//   })

//   // updateUserData(key:string, val:string){
//   //   if(key=='name'){
//   //     this.userData.update((item)=>({...item,name:val}))
//   //   }

//   //   if(key=='age'){
//   //     this.userData.update((item)=>({...item,age:parseInt(val)}))
//   //   }

//   //   if(key=='email'){
//   //     this.userData.update((item)=>({...item,email:val}))
//   //   }
//   // }

//     updateUserData(key:string, val:string){
//       this.userData.update((item)=>({...item,key:val}))
//     }
// }

// Angular Signals Getter and Setter
// export class App{
//   userName = signal("Deepak Thakur")
//   userData = signal({
//     college:"AISECT University",
//     email:"deepak@test.com"
//   })

//   get uName(){
//     return this.userName();
//   }

//   set uName(val:string){
//     this.userName.set(val)
//   }

//   get userCollege(){
//     return this.userData().college
//   }

//   set userCollege(val){
//     this.userData.update((item)=>({...item,college:val}))
//   }

// }

// // To-Do List with Signals
// export class App {
//   tasks = signal([{ id: 0, title: 'Team lunch', completed: false }]);
//   title = signal('');

//   addTask() {
//     // // console.log("Title: ", this.title())
//     // this.tasks.update((item)=> (
//     //   [...item,{id:this.tasks().length,title:this.title(),completed:false}]
//     // ))
//     // this.title.set('');
    
//     if (this.title()) {
//       // console.log("Title: ", this.title())
//       this.tasks.update((item) => [
//         ...item,
//         { id: this.tasks().length, title: this.title(), completed: false },
//       ]);
//       this.title.set('');
//     }
//   }

//   deleteTask(id: number) {
//     this.tasks.update((tasks) => tasks.filter((task) => task.id != id));
//   }
// }


// // Directives in Angular 22
// CommonModule --> Import necessary
// export class App{
//   isLogin = signal(true)
//   users = signal(["deepak", "sam", "peter", "bruce"])
//   pColor="red"
// }

// ngFor Directive in Angular 
// CommonModule --> Import necessary
// export class App{
//   students = ["Deepak", "Sam", "Peter", "Bruce", "Rahul", "Sandeep", ]

//   studentsData = signal([
//     {id:1, name:"Deepak", age:25, email:"deepak@test.com"},
//     {id:2, name:"Sam", age:30, email:"sam@test.com"},
//     {id:3, name:"Peter", age:35, email:"peter@test.com"},
//     {id:4, name:"Bruce", age:40, email:"bruce@test.com"}
//   ])

//   // Nested ngFor loop Directive
//   member = signal([
//     {id:1, name:"Deepak", skills:["Angular", "React", "Vue"]},
//     {id:2, name:"Sam", skills:["Java", "Python", "C++"]},
//   ])

// }

// ngIf Directive in Angular 
export class App{
  login = false;
  block = 0;

  updateBlock() {
    // this.block = (this.block % 3) + 1;
    // this.block = this.block + 1;
    this.block++;
  }
}