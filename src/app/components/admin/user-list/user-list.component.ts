import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSnackBar } from '@angular/material';
import { User } from 'src/app/models';
import { UserService } from 'src/app/services';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'firstName',
    'lastName',
    'role',
    'email'
  ];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource: MatTableDataSource<User>;
  listUsers: User[];
  pageSize: number = 12;


  constructor(private userSvc: UserService,
    private snackBar: MatSnackBar) {
    this.userSvc.getAll().subscribe(data => {
      this.dataSource = new MatTableDataSource<User>(data);
      this.dataSource.paginator = this.paginator;
    });
  }

  ngOnInit() {
  }

}
