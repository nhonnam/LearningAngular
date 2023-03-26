import { Component } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // postArray: Array<string> = ['Post 1', 'Post 2', 'Post 3', 'Post 4', 'Post 5'];

  // objArray: Array<any> = [
    // {id: 1, postTitle: 'Post 1'},
    // {id: 2, postTitle: 'Post 2'},
    // {id: 3, postTitle: 'Post 3'},
    // {id: 4, postTitle: 'Post 4'},
    // {id: 5, postTitle: 'Post 5'},
  // ];

  // stepForm: string = 'Something Else';

  // isActive: boolean = true;

  constructor(){
    
  }

  // addNew(){
  //   this.objArray.push({id: 6, postTitle: 'post 6'})
  // }

  // onDelete(index: any){
  //   this.objArray.splice(index, 1);
  // }

  // onClick(status: string){
  //     this.stepForm = status;
  // }

  name: string;
  email: string;
  address: string;

  userArray: Array<any>=[];

  onClick(){
    this.userArray.push({
      "name": this.name,
      "email": this.email,
      "address": this.address
    })
    console.log(this.userArray);  
  }

  onDelete(index: number){
    this.userArray.splice(index, 1);
  }
}
