import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

  // string, number, boolean
  courseName: string = 'Angular 18';

  myClassName = 'bg-red-500'

  inputType = 'radio';

  rollNo:number = 123;

  isIndian :boolean = false;

  currentDate:Date = new Date;

  constructor(){
    

  }

  showAlert(message:string){
    alert(message)
  }

}
