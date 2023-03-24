import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { PostComponent } from './post/post.component';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'hello-world';
  parentMessage: string = 'Message coming from the parent component';
  message: string;
  fromChildOutput: string;
  imgUrl: string = 'https://img.freepik.com/premium-photo/emoji-emoticon-character-background_601748-31824.jpg';
  bool: boolean = false;

  @ViewChild(PostComponent) childComp: PostComponent;

  constructor(private cdref: ChangeDetectorRef) {
    console.log(this.childComp)
  }

  ngAfterViewInit(): void {
    console.log(this.childComp);
    this.message = this.childComp.childMessage;
    this.cdref.detectChanges();
  }

  receiveMessage($event: string) {
    this.fromChildOutput = $event;
  }

  buttonClick() {
    console.log('Button Click Event worked');
  }

  onKeyup(username: string) {

    console.log(username);

  }

}
