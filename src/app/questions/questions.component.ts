import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BsModalService } from 'ngx-bootstrap/modal';
import { environment } from 'src/environments/environment';
import { Questions } from '../models/questions';
import { RequestService } from '../services/request.service';



@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  public form: any;
  data: Questions[] = [];
  url: string = environment.questions.get;
  constructor(public request: RequestService,
    public fb: FormBuilder ,
    public modalService: BsModalService) { }

  ngOnInit(): void {
    // console.log(this.request.test());
    this.form = this.fb.group({
      first_name: ['', Validators.compose(
        [Validators.required, Validators.minLength(2), Validators.maxLength(15), Validators.pattern(/^[A-Za-z]{1,}$/)])],
      phone: ['', Validators.compose(
        [Validators.required, Validators.pattern(/^[+0-9]{9,}$/)])],
      question: ['', Validators.required]
    });
    // console.log(this.form.get('first_name').dirty);
    // console.log(this.form.get('first_name').touched);
    // console.log(this.form.get('first_name').valid);
    // console.log(this.form.get('first_name').invalid);
    // console.log(this.form.get('first_name').value);
    // console.log(this.form.get('first_name').hasError('required'));
    // console.log(this.form.get('first_name').hasError('minlength'));
    // this.form.get('first_name').disable();
    // console.log(this.form.get('first_name').disabled);
    this.getData();
    console.log(this.form.get('first_name').enabled);
  }
  save(){
    console.log(this.form.value);
  }
  getData() {
    this.request.getData(this.url).subscribe((res: any) => {
      this.data = res;
      console.log(this.data);
    })
  }
  setVal(){
      this.form.patchValue({
        first_name: '',
        phone: '',
        question: ''
      })
  }
  
}

