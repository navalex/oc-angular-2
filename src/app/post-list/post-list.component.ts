import {Component, OnDestroy, OnInit} from '@angular/core';
import {PostService} from '../services/post.service';
import {Post} from '../post';
import {Subscription} from 'rxjs';

@Component({
	selector: 'app-post-list',
	templateUrl: './post-list.component.html',
	styleUrls: ['./post-list.component.scss']
})

export class PostListComponent implements OnInit, OnDestroy {

	postSubscription: Subscription;
	postList: Post[] = [];

	constructor(private postService: PostService) {
	}

	ngOnInit(): void {
		this.postSubscription = this.postService.postSubject.subscribe(
			(posts: Post[]) => {
				this.postList = posts;
			}
		);
		this.postService.emitPostSubject();
	}

	ngOnDestroy(): void {
		this.postSubscription.unsubscribe();
	}

}
