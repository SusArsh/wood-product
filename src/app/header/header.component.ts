import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BsModalService } from 'ngx-bootstrap/modal';
import { environment } from 'src/environments/environment';
import { Menu } from '../models/menu';
import { RequestService } from '../services/request.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  data: Menu[] = [];
  url: string = environment.menu.get;
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
