import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';  

@Injectable({
  providedIn: 'root'
})
export class IpServiceService {

  constructor(private http:HttpClient) { }

  public getIPAddress()  
  {  
    return this.http.get("http://api.ipify.org/?format=json");  
  }
  
  public getAndress(ip){
    return this.http.get(`http://api.ipstack.com/${ip}?access_key=cb9e8da67346ffa7444c999e8466f26c`);  
   
  }
}
