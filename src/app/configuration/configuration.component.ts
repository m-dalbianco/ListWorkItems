import { Component, OnInit } from '@angular/core';
import { Configuration } from './configuration';
import { ConfigurationService } from './configuration.service';
import { debugOutputAstAsTypeScript } from '@angular/compiler';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent implements OnInit {
  configurationModel: Configuration;
  saved: boolean = false;
  error: boolean = false;

  constructor(private _configurationService: ConfigurationService) { }

  ngOnInit() {
    this.configurationModel = new Configuration();

    this._configurationService
      .Get()
      .subscribe(
        config => {
          debugger;
          console.log(config);
          if(config) {
            this.configurationModel = config
          }
        },
        errors => {
          debugger;
          console.log(errors)
        }
      );
  }

  onSave() {
    this._configurationService
      .Save(this.configurationModel)
      .subscribe(
        config => {
          this.saved = true;
          this.error = false;
          console.log("Sucesso!")
        },
        errors => {
          debugger;
          this.error = true;
          this.saved = false;
          console.log(errors)
        }
      );
  }
}
