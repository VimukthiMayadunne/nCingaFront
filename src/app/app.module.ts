import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { MatToolbarModule, MatFormFieldModule, MatInputModule, MatOptionModule, MatSelectModule, MatIconModule, MatButtonModule, MatCardModule, MatTableModule, MatDividerModule, MatSnackBarModule } from '@angular/material';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListComponent } from './components/product/list/list.component';
import { CreateComponent } from './components/product/create/create.component';
import { EditComponent } from './components/product/edit/edit.component';

import { IssueService } from './service/issue.service';
import { ViewComponent } from './components/view/view.component';
import { PastComponent } from './components/past/past.component';
import { BeginComponent } from './components/begin/begin.component';
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

const routes: Routes = [
  { path: 'view', component: ViewComponent},
  { path: 'past', component: PastComponent},
  { path: 'plan', component: ProdPlanComponent },
  { path: 'begin', component: BeginComponent},

  { path: 'edit/:id', component: EditComponent},
  { path: 'list', component: ListComponent},
  { path: 'create', component: CreateComponent},

  { path: 'ecreate', component: EcreateComponent},
  { path: 'eedit/:id', component: EeditComponent},
  { path: 'elist', component: ElistComponent},
  
  { path: 'ccreate', component: CcreateComponent},
  { path: 'cedit/:id', component: CeditComponent},
  { path: 'clist', component: ClistComponent},
  
  { path: 'icreate', component: IcreateComponent},
  { path: 'iedit/:id', component: IeditComponent},
  { path: 'ilist', component: IlistComponent},

  { path: '', redirectTo: 'view', pathMatch: 'full'}
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
    IcreateComponent
  ],
  imports: [
    BrowserModule,
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
  providers: [IssueService],
  bootstrap: [AppComponent]
})
export class AppModule { }