import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/httpservice/http.service';


@Component({
  selector: 'app-viewsubmittedtransaction',
  templateUrl: './viewsubmittedtransaction.component.html',
  styleUrls: ['./viewsubmittedtransaction.component.css']
})
export class ViewsubmittedtransactionComponent implements OnInit {
jsondata : any;
  constructor(private httpservice:HttpService) { }

  ngOnInit(): void {
    this.httpservice.getAllTrasctions().subscribe(response=>{
      if(response && response!=undefined){
      console.log("server details:",response);
       this.jsondata=response;
     }
      //handing the error
}, error => {
  console.log("error server:",error);
},() => {
//complete cycle of subscribe
console.log("complete cycle of subscribe:")
}); 
  }
  
}
