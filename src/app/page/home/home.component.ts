import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/dataService';

@Component({
  selector: 'component-home',
  templateUrl: './home.component.html',
  styleUrls:['./home.component.css']
})

export class HomeComponent  {
  isHeaderFixed:any
constructor(private dataService: DataService){}
  ngOnChanges(){
    this.isHeaderFixed= this.dataService.getData()
    console.log(this.dataService.getData());
  }
}
