import {Component, inject, Input, OnInit} from '@angular/core';
import {StudentsService} from '../shared/services/students.service';
import {mergeMap, tap} from 'rxjs';
import {TokenStorageService} from '../shared/services/token-storage.service';

@Component({
  selector: 'app-students',
  imports: [],
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss'
})
export class StudentsComponent {
  @Input() students!: any;
  tokenService = inject(TokenStorageService)
  userRole = this.tokenService.getUserRole()
  studentsServices = inject(StudentsService)

  deleteStudent(idStudent: number) {
     this.studentsServices.deleteStudent(idStudent).pipe(
       mergeMap(() => this.studentsServices.getAllStudents().pipe(
         tap( data => this.students = data)
       ))
     ).subscribe()
  }
}
