import {Component, Input, OnInit} from '@angular/core';
import {PostService} from '../services/post.service';
import * as $ from 'jquery';

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

	@Input() id: number;

	constructor(private postService: PostService) {
	}

	ngOnInit() {
	}

	like() {
		this.post.loveIts++;
		this.postService.editPost(this.post, this.id);
	}

	dislike() {
		this.post.loveIts--;
		this.postService.editPost(this.post, this.id);
	}

}
