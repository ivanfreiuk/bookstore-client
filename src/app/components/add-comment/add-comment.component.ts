import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommentService } from 'src/app/services/comment.service';
import { Comment } from 'src/app/models/comment';
import { AuthenticationService } from 'src/app/services';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent implements OnInit {

  @Input() bookId: number;
  @Output() commentAdded = new EventEmitter();
  commentForm: FormGroup;
  rating: number;


  constructor(private authSvc: AuthenticationService, private commentSvc: CommentService, private fb: FormBuilder) {

    this.commentForm = this.fb.group({
      headlineControl: ['', [Validators.required]],
      contentControl: ['', [Validators.required]]
    })
  }

  ngOnInit() {
  }

  onRate(rate: number) {
    this.rating = rate;
  }

  commentSubmit() {
    
    if (this.commentForm.invalid) {
      return;
    }

    const comment = new Comment();
    comment.headline = this.commentForm.controls.headlineControl.value;
    comment.content = this.commentForm.controls.contentControl.value;
    // TODO: comment.publicationDate = this.getDateTimeNow();
    comment.mark = this.rating;
    comment.bookId = this.bookId;
    comment.userId = this.authSvc.currentUserValue ? this.authSvc.currentUserValue.id : 2;

    this.commentSvc.post(comment).subscribe(() => {
      this.commentAdded.emit();
    }
    );
  }
}
