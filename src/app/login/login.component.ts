import { AuthenticateService } from './authenticate.service';
import { Component, OnInit } from '@angular/core';
import { Authenticate } from './authenticate.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = ''
  password = ''
  user: Authenticate


  constructor(private AuthenticateService: AuthenticateService, private Router: Router) { }

  ngOnInit(): void {
    localStorage.clear()
  }

  onKeyEmail(event: any) {
    this.email = event.target.value;
  }



  onKeyPassword(event: any) {
    this.password = event.target.value;
  }

  login() {
    console.log('chamou')
    console.log(this.email, this.password)
    this.AuthenticateService.postAuthenticate(this.email, this.password).subscribe(res => {

      this.user = res
      console.log(this.user)
      localStorage.setItem('userId', String(this.user.id))
      localStorage.setItem('userToken', this.user.token)

      this.Router.navigate(['client'])

    })
  }



}
