import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TokenStorageService} from './token-storage.service';

const AUTH_API = 'http://localhost:9000/etudiants';

@Injectable({
  providedIn: 'root'
})

export class StudentsService{

  constructor(private http: HttpClient, private tokenStorage : TokenStorageService) {}

  getAllStudents(): Observable<any>{
    return this.http.get(AUTH_API);
  }

  deleteStudent(studentId: number): Observable<any>{
    return  this.http.delete(`${AUTH_API}/delete/${studentId}`);
  }
}
