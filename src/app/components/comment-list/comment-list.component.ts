import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StarRatingComponent } from 'ng-starrating';
import { AuthenticationService } from 'src/app/services';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {

  @Input() comments: Comment[];
  @Output() commentDeleted = new EventEmitter();

  constructor(private commentSvc: CommentService, private authSvc: AuthenticationService) { }

  ngOnInit() {
  }


  userCanDelete(userId: number) {
    return this.authSvc.currentUserValue.id === userId;
  }

  delete(id: number) {
    this.commentSvc.delete(id).subscribe(()=>{
      this.commentDeleted.emit();
    });
  }

}
