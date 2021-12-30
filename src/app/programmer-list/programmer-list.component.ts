import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProgrammerService } from '../programmer.service';
import { Programmer } from '../programmer';

@Component({
  selector: 'app-programmer-list',
  templateUrl: './programmer-list.component.html',
  styleUrls: ['./programmer-list.component.css']
})
export class ProgrammerListComponent implements OnInit {

  programmers: Programmer[];
  lastName: string;
  constructor(private route: Router, private programmerService: ProgrammerService) { }

  ngOnInit(): void {
    this.getAllProgrammers();
  }

  private getAllProgrammers(){
    this.programmerService.getProgrammerList().subscribe(data =>{
      this.programmers = data;
    });
  }

  programmerDetails(id: number){
    this.route.navigate(['programmer-details', id]);
  }

  updateProgrammer(id: number){
    this.route.navigate(['update-programmer', id]);
  }

  deleteProgrammer(id: number){
    this.programmerService.deleteProgrammer(id).subscribe(data =>{
      console.log(data);
      this.getAllProgrammers();
    });
  }

  search(){
    if(this.lastName != ""){
      this.programmers = this.programmers.filter(res =>{
        return res.lastName.toLocaleLowerCase().match(this.lastName.toLocaleLowerCase());
      });
    }else if(this.lastName == ""){
      this.ngOnInit();
    }   
    }
}
