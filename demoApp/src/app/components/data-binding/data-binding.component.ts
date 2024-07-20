import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {

  // String, number, boolean
  courseName: string = 'Angular 18';
  stateName: string = '';
  myClassName: string = 'bg-red-500';
  inputType: string = 'radio';
  rollNo: number = 123;
  isIndian: boolean = false;
  currentDate: Date = new Date();

  firstName = signal('Sunil');

  constructor() {}

  changeCourseName() {
    this.courseName = "React JS";
    this.firstName.set("DHAKAD");
  }

  showAlert(message: string) {
    alert(message);
  }
}
