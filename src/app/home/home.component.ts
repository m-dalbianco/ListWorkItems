import { Component, OnInit } from '@angular/core';
import { WorkItemListService } from '../work-item-list/work-item-list.service';
import { WorkItem } from '../work-item-list/work-item';
import { OrderPipe } from 'ngx-order-pipe';
import { FilterPipe } from 'ngx-filter-pipe';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  workItems: WorkItem[] = [];
  
  order = 'createdDate';
  reverse: boolean = false;
  workItemFilter: any = { workItemType: '' };

  constructor(private _workItemService: WorkItemListService,
    private orderPipe: OrderPipe, private filter: FilterPipe) {
      let result = this.filter.transform(this.workItems, { name: 'J' });
      console.log(result);
     }

  ngOnInit() {
    this._workItemService
      .listFromWorkItems()
      .subscribe(
        workItems => {
          debugger;
          this.workItems = workItems
        },
        errors => console.log(errors)
      );
  }

  setOrder(value: string) {
    debugger;
    if (this.order === value) {
      this.reverse = !this.reverse;
    }

    this.order = value;
  }
}
