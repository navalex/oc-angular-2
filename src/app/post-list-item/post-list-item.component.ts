import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() post: {
    title: string,
    content: string,
    loveIts: number,
    createdAt: Date
  };

  constructor() { }

  ngOnInit() {
  }

  like() {
    this.post.loveIts++;
  }

  dislike() {
    this.post.loveIts--;
  }

}
