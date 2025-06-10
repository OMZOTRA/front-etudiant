import {Component, inject, OnInit} from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [
    AsyncPipe
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{
  private router = inject(Router)
  private authService =  inject(AuthService)
  isLogged$= this.authService.isLogged$.asObservable()
  ngOnInit() {
  }

  deconnexion(){
    this.authService.logout();
    this.router.navigateByUrl('')
  }
}
