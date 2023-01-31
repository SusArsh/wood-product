import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BsModalService } from 'ngx-bootstrap/modal';
import { environment } from 'src/environments/environment';
import { WoodWork } from '../models/wood-work';
import { RequestService } from '../services/request.service';

@Component({
  selector: 'app-assortment',
  templateUrl: './assortment.component.html',
  styleUrls: ['./assortment.component.css']
})
export class AssortmentComponent implements OnInit {
  data: WoodWork[] = [];
  url: string = environment.wood.get;
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
