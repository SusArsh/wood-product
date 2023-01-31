import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BsModalService } from 'ngx-bootstrap/modal';
import { environment } from 'src/environments/environment';
import { Advantages } from '../models/advantages';
import { RequestService } from '../services/request.service';

@Component({
  selector: 'app-advantages',
  templateUrl: './advantages.component.html',
  styleUrls: ['./advantages.component.css']
})
export class AdvantagesComponent implements OnInit {

data: Advantages[] = [];
  url: string = environment.advantages.get;
  constructor(public request: RequestService,
    public fb: FormBuilder,
    public modalService: BsModalService) { }

  ngOnInit(): void {
    this.getData();
  }
  
  getData() {
    this.request.getData(this.url).subscribe((res: any) => {
      this.data = res;
      console.log(this.data);
    })
  }


}
