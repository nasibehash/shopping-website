import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
click(){
  this.router.navigate(['/auth/login']);

}
}
