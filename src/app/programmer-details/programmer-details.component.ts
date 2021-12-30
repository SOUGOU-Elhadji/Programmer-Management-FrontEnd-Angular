import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Programmer } from '../programmer';
import { ProgrammerService } from '../programmer.service';

@Component({
  selector: 'app-programmer-details',
  templateUrl: './programmer-details.component.html',
  styleUrls: ['./programmer-details.component.css']
})
export class ProgrammerDetailsComponent implements OnInit {

  id: number;
  programmer: Programmer;
  constructor(private route: ActivatedRoute, private programmerService: ProgrammerService,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.programmer = new Programmer();
    this.programmerService.getProgrammerById(this.id).subscribe(data =>{
      this.programmer = data;

    });
  }

  goToList(){
    this.router.navigate(['/programmers'])
  }
}
