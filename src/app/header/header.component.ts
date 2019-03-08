import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';
import { TokenService } from '../shared/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService,
    private router: Router,
    private tokenService: TokenService) { }

  ngOnInit() {
  }

  onLogout(){
    this.authService.removeAuthToken();
    this.tokenService.clearStorage();
    this.router.navigate(['login']);
  }
}
