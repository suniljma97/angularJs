import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-structural-dir',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './structural-dir.component.html',
  styleUrl: './structural-dir.component.css'
})
export class StructuralDirComponent {

  isDiv1Visible: boolean = true
  isToggleDive2: boolean = true
  num1: string = '';
  num2: string = '';
  isActive: boolean = false;
  selectedState: string = '';
  cityArrays: string[] = ['n2', 'n3', 'n4', 'n5'];
  studentList: any[] = [{ name: "Sunil", city: 'b1',isActive:false }, { name: "Anil", city: 'b2',isActive:true  }, { name: "Mahi", city: 'b3',isActive:false  }];
  showDiv1() {
    this.isDiv1Visible = true;
  }
  hideDiv1() {
    this.isDiv1Visible = false;
  }
  toggleDiv2() {
    this.isToggleDive2 = !this.isToggleDive2
  }
}
