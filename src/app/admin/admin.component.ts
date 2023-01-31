import { Component, OnInit } from '@angular/core';
import { environment, url } from 'src/environments/environment';
import { RequestService } from '../services/request.service';
import { FormBuilder, Validators } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { TemplateRef } from '@angular/core';
import { Admin } from '../models/admin';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  private url: string = url;
  public pathName: string = '';
  public data: Admin[] = [];
  close: any;
  public list: any[] = [
    {
      id: 1,
      path: "/admin/menu",
      text: "Menu"
    },
    {
      id: 2,
      path: "/admin/solid_block",
      text: "Solid wood products"
    },
    {
      id: 3,
      path: "/admin/wood_work",
      text: "The wood we work with"
    },
    {
      id: 4,
      path: "/admin/wood_work",
      text: "Our work"
    },
    {
      id: 5,
      path: "/admin/advantages",
      text: "Advantages working with us"
    },
    {
      id: 6,
      path: "/admin/about_us",
      text: "About us"
    },
    {
      id: 7,
      path: "/admin/any_questions",
      text: "Any questions?"
    },
    {
      id: 8,
      path: "/admin/price_list",
      text: "Price list"
    },
    {
      id: 9,
      path: "/admin/contact",
      text: "Contact us"
    },
    {
      id: 10,
      path: "/admin/page404",
      text: "404"
    },
    {
      id: 11,
      path: "/admin/footer",
      text: "Footer"
    }
  ]
  form: any;
  modalRef: any;
  // modalService: any;
 

  constructor(public request: RequestService,
    public fb: FormBuilder,
    public modalService: BsModalService) { }

  ngOnInit(): void { 
    this.form = this.fb.group;
    // this.getData();
  }

  getData(index: number) {
    this.pathName = this.list[index].path.split('/')[2];
    this.request.getData(`${this.url}/${this.pathName}`).subscribe((res: any) => {
      this.data = res;
      console.log(this.data[0]);
      // for (let key in this.data[0]) {
      //   if (typeof this.data[0][key] === 'object' && this.data[0][key] !== null) {
      //     console.log(this.data[0][key]);
      //   }
      // }
    
    })
  }
  save(){
    let val= this.form.value;
     this.request.postData(`${this.url}/${this.pathName}`, val).subscribe((res: any) => {
       console.log(res);
 
     })
    //  this.getData();
    
 
   }
   openModal(mod: TemplateRef<any>) {
    this.modalRef = this.modalService.show(mod);
    this.save();
    
  }
  hide(mod:TemplateRef<any>){
    if (!this.modalRef) {
      return;
    }
  }
  deleteData(item:string){
  
    this.request.deleteData(`${this.url}`).subscribe((res: any) => {
      console.log(res);

  })
  
  this.getData

}

putData(){
  let value:any={
    image: "",
      icon:"",
      title:"",
      text:"",
      subtitle:"",
      button_text:"",
      path:""

     
  }
  this.request.putData(`${this.url}`, value).subscribe((res) => {
    console.log(res);

  })
}
}