import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NewtransactionComponent } from './components/newtransaction/newtransaction.component';
import { ViewsubmittedtransactionComponent } from './components/viewsubmittedtransaction/viewsubmittedtransaction.component';
import { LeftnavComponent } from './components/leftnav/leftnav.component'; 
import { DashboardRoutingModule } from './dashboard-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { NumberOnlyDirective } from '../directives/number-only.directive';
import { AlphabetOnlyDirective } from '../directives/alphabets-only.directive';

@NgModule({
  declarations: [
     ViewsubmittedtransactionComponent,
    DashboardComponent,
    LeftnavComponent,
    NewtransactionComponent, 
    NumberOnlyDirective,
    AlphabetOnlyDirective
    

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DashboardRoutingModule,
    HttpClientModule,
    
    
     
    
    

  ],
  exports: [
   
  ]
})
export class DashboardModule { }
