import { MessagesService } from './messages.service';
import { COURSES } from './mock-courses';
import { Injectable } from '@angular/core';
import { Course } from './course';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  getCourses(): Observable<Course[]>{
    this.messagesService.add('CourseService: fetched courses');
    return of(COURSES);
  }

  getCourse(id: number): Observable<Course>{
    this.messagesService.add(`CourseService: fetched course id = ${id}`);
    return of(COURSES.find(course => course.id == id));
  }
  
  constructor(private messagesService: MessagesService) { }
}
