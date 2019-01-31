import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import {FormsModule} from '@angular/forms'

import { MatToolbarModule, MatFormFieldModule, MatInputModule, MatOptionModule, MatSelectModule, MatIconModule, MatButtonModule, MatCardModule, MatTableModule, MatDividerModule, MatSnackBarModule } from '@angular/material';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListComponent } from './components/product/list/list.component';
import { CreateComponent } from './components/product/create/create.component';
import { EditComponent } from './components/product/edit/edit.component';

import { IssueService } from './service/issue.service';
import { ItemsService } from './service/items.service';
import { CustomersService } from './service/customers.service';
import { EmployeeService } from './service/employee.service';
import { UserService } from './service/user.service';


import { AuthGuard } from './auth/auth.guard';
import { ManGuard } from './auth/man.guard';
import { AuthInterceptor } from './auth/auth.interceptor';



import { ViewComponent } from './components/view/view.component';
import { PastComponent } from './components/past/past.component';
import { BeginComponent } from './components/sPro/begin/begin.component';
import { ProdPlanComponent } from './components/prod-plan/prod-plan.component';
import { ClistComponent } from './components/customers/clist/clist.component';
import { CcreateComponent } from './components/customers/ccreate/ccreate.component';
import { CeditComponent } from './components/customers/cedit/cedit.component';
import { EcreateComponent } from './components/employee/ecreate/ecreate.component';
import { ElistComponent } from './components/employee/elist/elist.component';
import { EeditComponent } from './components/employee/eedit/eedit.component';
import { IeditComponent } from './components/items/iedit/iedit.component';
import { IlistComponent } from './components/items/ilist/ilist.component';
import { IcreateComponent } from './components/items/icreate/icreate.component';
import { ManualComponent } from './components/sPro/manual/manual.component';
import { AutoComponent } from './components/sPro/auto/auto.component';
import { StopComponent } from './components/sPro/stop/stop.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { NewNawComponent } from './new-naw/new-naw.component';
import { FeedbackComponent } from './components/feedback/feedback.component';

const routes: Routes = [
  { path: 'feedback', component: FeedbackComponent,canActivate:[AuthGuard]  },
  { path: 'auto', component: AutoComponent,canActivate:[AuthGuard]  },
  { path: 'manual/:id', component: ManualComponent,canActivate:[AuthGuard]   },
  { path: 'stop', component: StopComponent,canActivate:[AuthGuard]   },

  { path: 'view', component: ViewComponent,canActivate:[AuthGuard]   },
  { path: 'past', component: PastComponent ,canActivate:[AuthGuard] },
  { path: 'plan', component: ProdPlanComponent ,canActivate:[ManGuard] },
  { path: 'begin', component: BeginComponent,canActivate:[AuthGuard]   },

  { path: 'edit/:id', component: EditComponent ,canActivate:[ManGuard]},
  { path: 'list', component: ListComponent ,canActivate:[AuthGuard] },
  { path: 'create', component: CreateComponent ,canActivate:[AuthGuard]},

  { path: 'ecreate', component: EcreateComponent ,canActivate:[ManGuard] },
  { path: 'eedit/:id', component: EeditComponent ,canActivate:[ManGuard] },
  { path: 'eedit', component: EeditComponent,canActivate:[ManGuard]   },
  { path: 'elist', component: ElistComponent ,canActivate:[ManGuard] },
  
  { path: 'ccreate', component: CcreateComponent ,canActivate:[ManGuard] },
  { path: 'cedit/:id', component: CeditComponent,canActivate:[ManGuard]  },
  { path: 'clist', component: ClistComponent ,canActivate:[ManGuard] },
  
  { path: 'icreate', component: IcreateComponent,canActivate:[ManGuard]  },
  { path: 'iedit/:id', component: IeditComponent ,canActivate:[ManGuard]},
  { path: 'ilist', component: IlistComponent,canActivate:[ManGuard] },


  { path: 'login', component: LoginComponent  },
  { path: '', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CreateComponent,
    EditComponent,
    ViewComponent,
    PastComponent,
    BeginComponent,
    ProdPlanComponent,
    ClistComponent,
    CcreateComponent,
    CeditComponent,
    EcreateComponent,
    ElistComponent,
    EeditComponent,
    IeditComponent,
    IlistComponent,
    IcreateComponent,
    ManualComponent,
    AutoComponent,
    StopComponent,
    NavbarComponent,
    LoginComponent,
    NewNawComponent,
    FeedbackComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatDividerModule,
    MatSnackBarModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },AuthGuard,ManGuard, UserService,IssueService,ItemsService,CustomersService,EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }