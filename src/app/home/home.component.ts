import { Component, OnInit } from '@angular/core';
import { IpServiceService } from '../ip-service.service'; 

 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']

  
})
export class HomeComponent implements OnInit {


  constructor(private ip:IpServiceService) { }
 public showOverlay = true;
  title = 'Teste';  
  ipAddress:string;
  city:string;
  region_name:string;
  country_name:string;
  load_completed:any = false;
  loading:any = false;
  ngOnInit(): void {
    this.getIP();
    
  }

  getIP()  
  {  
    this.ip.getIPAddress().subscribe((res:any)=>{  
      this.ipAddress=res.ip;
      this.ip.getAndress(this.ipAddress).subscribe((res:any)=>{  
        console.log(res);
        this.city = res.city;
        this.region_name = res.region_name;
        this.country_name = res.country_name;
        if(this.city != null){
          this.loading = true;
        }
      });  
    });  
  } 
  
}
