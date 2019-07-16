import { Component, OnInit } from '@angular/core';
import { WorkItemListService } from './work-item-list.service';
import { WorkItem } from './work-item';

@Component({
  selector: 'app-work-item-list',
  templateUrl: './work-item-list.component.html',
  styleUrls: ['./work-item-list.component.css']
})
export class WorkItemListComponent implements OnInit {
  workItems: WorkItem[] = [];

  constructor(private _workItemService: WorkItemListService) { }

  ngOnInit() {
    this._workItemService
      .listFromWorkItems()
      .subscribe(
        workItems => this.workItems = workItems,
        errors => console.log(errors)
      );
  }
}
