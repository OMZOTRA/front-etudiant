import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {StudentsComponent} from './students/students.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HeaderComponent} from './shared/header/header.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'gestion-student';
}
