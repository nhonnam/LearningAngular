import { Component } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  postTitle: string;
  postDetails: string;
  imageURL: string;
  postURL: string;
  addBackground: boolean;
}
