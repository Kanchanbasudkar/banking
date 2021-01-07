import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-leftnav',
  templateUrl: './leftnav.component.html',
  styleUrls: ['./leftnav.component.css']
})
export class LeftnavComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  logout(){
    localStorage.clear();
    this.router.navigate(['/']);
  }

}
