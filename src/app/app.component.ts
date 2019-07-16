import { Component } from '@angular/core';
import { WorkItemListService } from './work-item-list/work-item-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ListWorkItems';
  workItems: any[] = []; 

  constructor(workItemService: WorkItemListService) {
    workItemService
      .listFromWorkItems()
      .subscribe(
        workItems => this.workItems = workItems,
        errors => console.log(errors)
      );
  }
}
