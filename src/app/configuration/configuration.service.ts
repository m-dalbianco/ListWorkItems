import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from '@angular/core';
import { Configuration } from './configuration';

const urlSave = 'http://localhost:54012/api/workItem/saveconfiguration';
const urlGet = 'http://localhost:54012/api/workItem/getconfiguration';

@Injectable({ providedIn: 'root'})  
export class ConfigurationService {

    constructor(private _http: HttpClient) { }

    Get() {
       return this._http
            .get<Configuration>(urlGet);
    }

    Save(configuration : Configuration) {
        var json = JSON.stringify(configuration);
        var params = 'json=' + json;

        return this._http
             .post(urlSave, configuration);
     }
}