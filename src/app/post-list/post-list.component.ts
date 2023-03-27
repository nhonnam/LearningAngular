import { Component, Input, OnInit } from '@angular/core';
import { PostService } from '../Services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  postList: Array<any>;

  constructor(private postService: PostService) {
    this.postList = postService.postList;
  }

  ngOnInit(): void {

  }
}
