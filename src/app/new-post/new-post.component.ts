import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {Post} from '../post';
import {PostService} from '../services/post.service';
import { LoremIpsum } from 'lorem-ipsum';
import {Router} from '@angular/router';
import * as $ from 'jquery';

@Component({
	selector: 'app-add-post',
	templateUrl: './new-post.component.html',
	styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

	private post: Post;
	postForm: FormGroup;

	constructor(private postService: PostService, private router: Router, private loremService: LoremIpsum, private formBuilder: FormBuilder) {
	}

	ngOnInit() {
		this.initPost();
		this.initForm();
	}

	initPost() {
		this.post = {title: '', content: '', loveIts: 0, createdAt: new Date()};
	}

	initForm() {
		this.postForm = this.formBuilder.group({
			title: ['', Validators.required],
			content: ['', Validators.required]
		});
	}

	submit() {
		const form = this.postForm;
		const formValue = this.postForm.value;

		if (form.valid) {
			this.post.title = formValue.title;
			this.post.content = formValue.content;
			this.postService.addPost(this.post);
			this.initPost();
			this.initForm();
			$('.messages-wrapper').fadeOut(function() {
				$(this).html('<div class="alert alert-success">Post added.</div>');
				$(this).fadeIn();
			});
		}
	}

	randomize() {
		this.postForm.patchValue({title: this.loremService.generateWords(1)});
		this.postForm.patchValue({content: this.loremService.generateParagraphs(Math.floor(Math.random() * Math.floor(2)) + 1)});
	}

}
