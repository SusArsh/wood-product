import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RequestService {

  
  constructor(public http:HttpClient) { 
    console.log(this.http);
    
  }

  getData(url:string){
    let header = new HttpHeaders({'Accept-language': 'en'});
    return this.http.get(url, {headers: header});
  }
  postData (url: string, value:any){
    let header = new HttpHeaders({'Content-type': 'application/json'});
    return this.http.post(url, value, {headers: header})
  }
  putData (url: string, value:any){
    let header = new HttpHeaders({'Content-type': 'application/json'});
    return this.http.put(url, value, {headers: header})
  }
  deleteData(url:string){
    let header = new HttpHeaders({'Accept-language': 'en'});
    return this.http.delete(url, {headers: header})


  }
}
