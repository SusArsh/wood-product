import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BsModalService } from 'ngx-bootstrap/modal';
import { environment } from 'src/environments/environment';
import { Datas } from '../models/datas';
import { RequestService } from '../services/request.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  data: Datas[] = [];
  url: string = environment.home.get;
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
