import { MessagesService } from './../messages.service';
import { CourseService } from './../course.service';
import { Component, OnInit } from '@angular/core';
import { Course } from '../course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses: Course[];

  constructor(private courseService: CourseService, private messagesService: MessagesService) { }

  ngOnInit(): void {
    this.getCourses();
  }

  getCourses(): void{
    this.courseService.getCourses().subscribe(courses => this.courses = courses);
  }
}
