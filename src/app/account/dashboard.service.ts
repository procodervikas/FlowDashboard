import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  url = "http://localhost:3000/";
  constructor(private http:HttpClient) { }
  getMobileList() {
    console.log('data is secure');
    return this.http.get(this.url+"mobileList");
  }

  getMobileBrandList(){
    console.log('data is secure show');
    return this.http.get(this.url+"chartData");
  }

  saveMobileList(data){
    console.log(data);
    return this.http.post(this.url , data);
  }
}
