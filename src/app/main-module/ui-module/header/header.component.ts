import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  name: string = '';
  constructor(private http:AuthService) { }

  ngOnInit(): void {
    this.http.userName.subscribe(x => (this.name)= x);
  }

}
