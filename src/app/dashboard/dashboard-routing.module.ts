import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NewtransactionComponent } from './components/newtransaction/newtransaction.component';
import { ViewsubmittedtransactionComponent } from './components/viewsubmittedtransaction/viewsubmittedtransaction.component';

const routes: Routes = [

    {
        path: '',
        canActivate : [AuthGuard],
        component: DashboardComponent
    },
    {
        path: 'newtransaction',
        component: NewtransactionComponent
    },
    {
        path: 'viewsubmittedtransaction',
        component: ViewsubmittedtransactionComponent
    }
]

@NgModule({
    declarations: [],
    imports: [

        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class DashboardRoutingModule { }
