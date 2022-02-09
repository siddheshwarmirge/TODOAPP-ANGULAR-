import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private authServ:SocialAuthService) { }

  ngOnInit(): void {
  }
  signInHandler(){
    this.authServ.signIn(GoogleLoginProvider.PROVIDER_ID).then((data)=>{
      localStorage.setItem('google_auth', JSON.stringify(data));
      this.router.navigateByUrl('/todo').then();
    })
  }

}
