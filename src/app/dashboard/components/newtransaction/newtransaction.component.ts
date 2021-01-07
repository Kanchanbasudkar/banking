import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpService } from 'src/app/httpservice/http.service';
import customerdata from '../../../../assets/customerdata.json';


@Component({
  selector: 'app-newtransaction',
  templateUrl: './newtransaction.component.html',
  styleUrls: ['./newtransaction.component.css']
})
export class NewtransactionComponent implements OnInit {

  newTransactionForm: FormGroup;
  submitted = false;
  custmerInfo: any;
  custDetails: any;
  custObject: any;
  query :any;
  constructor(private formbuilder: FormBuilder, private http: HttpService) {
    this.custmerInfo = customerdata;
    
  }
  ngOnInit(): void {
    this.newTransactionForm = this.formbuilder.group({
      reference: ['', [Validators.required, Validators.minLength(15)]],
      customernumber: ['', Validators.required],
      customername: ['', Validators.required],
      customeraddress: ['', Validators.required],
      transferamount: ['', Validators.required],
      phonenumber: ['', Validators.required],
      trnsfCurrency: ['', Validators.required],
      beneficiarybank: ['', Validators.required],
      accountnumber: ['', Validators.required],
      paymentdetails: ['', Validators.required],
    });
    this.generateReferenceNo();
    const custObj = {
      "customernumber": '',
      "customername": '',
      "customeraddress": '',
      "phonenumber": ''
    };
    
    this.custDetails = this.custmerInfo.responseXML.getCustomerInfoResponse.getCustomerInfoResult.CUST_INFO;
    custObj.customernumber = this.custDetails.CUST_NO;
    custObj.customername = this.custDetails.SHORT_NAME;
    custObj.customeraddress = this.custDetails.STREET_ADDR + ',' + this.custDetails.TOWN_COUNTRY + ',' + this.custDetails.COUNTRY + '.';
    custObj.phonenumber = this.custDetails.CONTACT_INFO_V7.CONTACT_INFO_V7.PHONE_LIST_V7.PHONE_LIST_ITEM_V7.PHONE;
    this.custObject = custObj;
  }

  onSearchChange(customernumber: String): void {
    if (this.custDetails.CUST_NO === customernumber) {
      this.newTransactionForm.get('customername')?.setValue(this.custObject.customername);
      this.newTransactionForm.get('phonenumber')?.setValue(this.custObject.phonenumber);
      this.newTransactionForm.get('customeraddress')?.setValue(this.custObject.customeraddress)
     
    }
  }

  generateReferenceNo() {
    let refno = "CUS" + (new Date()).toISOString().replace(/-/g, '').split('T')[0] + Math.floor(Math.random() * 10);
    this.newTransactionForm.get('reference')?.setValue(refno);
  }

  get f() { return this.newTransactionForm.controls; }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.newTransactionForm.invalid) {
      return;
    }
  }


}

