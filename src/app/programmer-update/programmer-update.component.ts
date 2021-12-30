import { Component, OnInit } from '@angular/core';
import { Programmer } from '../programmer';
import { ProgrammerService } from '../programmer.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-programmer-update',
  templateUrl: './programmer-update.component.html',
  styleUrls: ['./programmer-update.component.css']
})
export class ProgrammerUpdateComponent implements OnInit {

  id: number;
  programmer: Programmer = new Programmer();
  constructor(private programmerService: ProgrammerService, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.programmerService.getProgrammerById(this.id).subscribe(data =>{
      this.programmer = data;
    }, error => console.log(error));
  }

  goToList(){
    this.router.navigate(['/programmers']);
  }

  onSubmit(){
    this.programmerService.updateProgrammer(this.id,
      this.programmer).subscribe(data => {
        this.goToList();
      }, error => console.log(error));
  }

}
