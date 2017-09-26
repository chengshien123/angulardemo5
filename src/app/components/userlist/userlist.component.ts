import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  public  names: String[];
  constructor()  {
     this.names = ['Ari', 'Bri', 'Cri', 'Dri'];
  }

  ngOnInit() {
  }

}
