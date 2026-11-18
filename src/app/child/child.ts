import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-child',
  styleUrl: './child.css',
  templateUrl: './child.html',
})
export class Child {
  @Input() userName:string|undefined
  @Output() selectedUser = new EventEmitter()
  @Output() deleteUser = new EventEmitter()

  whichUser(name:string | undefined){
    // alert(name)
    this.selectedUser.emit(name)
  }

  delete(name:string | undefined){
    this.deleteUser.emit(name)
  }
}
