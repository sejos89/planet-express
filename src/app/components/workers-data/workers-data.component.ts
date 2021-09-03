import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FetchWorkersService } from 'src/app/services/fetch-workers.service';

@Component({
  selector: 'app-workers-data',
  templateUrl: './workers-data.component.html',
  styleUrls: ['./workers-data.component.scss'],
})
export class WorkersDataComponent implements OnInit {
  public workers: Observable<any[]>;
  constructor(private fetchWorkers: FetchWorkersService) {}

  ngOnInit(): void {
    this.workers = this.fetchWorkers.getWorkers();
  }
}
