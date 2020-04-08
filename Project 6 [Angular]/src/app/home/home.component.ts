import { CourseService } from './../course.service';
import { Course } from './../course';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  courses: Course[] = [];

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.getCourses();
  }

  getCourses(): void{
    this.courseService.getCourses().subscribe(courses => this.courses = courses.slice(1,4));
  }

}
