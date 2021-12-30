import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Programmer } from '../programmer';
import { ProgrammerService } from '../programmer.service';

@Component({
  selector: 'app-create-programmer',
  templateUrl: './create-programmer.component.html',
  styleUrls: ['./create-programmer.component.css']
})
export class CreateProgrammerComponent implements OnInit {

  programmer: Programmer = new Programmer();
  constructor(private programmerService: ProgrammerService, private route: Router) { }

  ngOnInit(): void {
  }

  saveProgrammer(){
    this.programmerService.createProgrammer(this.programmer).subscribe(data => {
      console.log(data);
      this.goToList();
    },
    error => console.log(error));
  }

  onSubmit(){
    console.log(this.programmer);
    this.saveProgrammer();
  }
  
  goToList(){
    this.route.navigate(['/programmers'])
  }

  

}
