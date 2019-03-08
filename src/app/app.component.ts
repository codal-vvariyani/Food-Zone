import { Component, OnInit } from '@angular/core';
import { AuthService } from './shared/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular7';
  isHeaderOn=false;
  constructor(private authService: AuthService){}

  ngOnInit(){
    if(this.authService.getAuthToken())
      this.isHeaderOn=true;
    else
      this.isHeaderOn=false;
  }
}
