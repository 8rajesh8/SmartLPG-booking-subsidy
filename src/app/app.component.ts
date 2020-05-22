import {Component, OnInit} from '@angular/core';
import {Customer} from './customer';
import { SerService } from './subsidy-service/ser.service';
import {ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'GiveUp';
  constructor(public service: SerService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(){
    this.router.navigate(['/request']);
  }

}
