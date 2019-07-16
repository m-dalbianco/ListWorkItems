import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from '@angular/core';
import { WorkItem } from './work-item';

const API = 'http://localhost:54012/api/workItem/getworkitems';

@Injectable({ providedIn: 'root'})
export class WorkItemListService {

    constructor(private http: HttpClient) { }

    listFromWorkItems() {
       return this.http
            .get<WorkItem[]>(API);
    }
}