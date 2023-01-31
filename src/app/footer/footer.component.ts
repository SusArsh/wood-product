import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BsModalService } from 'ngx-bootstrap/modal';
import { environment } from 'src/environments/environment';
import { Footer } from '../models/footer';
import { RequestService } from '../services/request.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  data: Footer[] = [];
  url: string = environment.footer.get;
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
