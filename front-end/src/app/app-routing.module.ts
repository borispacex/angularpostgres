import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { ListComponent } from './components/admin/list/list.component';
import { DirectorComponent } from './components/director/director.component';
import { InvestigadorComponent } from './components/investigador/investigador.component';
import { GuardAdminService } from './services/guards/guard-admin.service';
import { GuardDirectorService } from './services/guards/guard-director.service';
import { GuardInvestigadorService } from './services/guards/guard-investigador.service';
import { NuevaFotografiaComponent } from './components/admin/nueva-fotografia/nueva-fotografia.component';
import { EditarFotografiaComponent } from './components/admin/editar-fotografia/editar-fotografia.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'admin', component: AdminComponent,
    canActivate: [
      GuardAdminService
    ],
    children: [
      { path: 'list', component: ListComponent },
      { path: 'new', component: NuevaFotografiaComponent },
      { path: 'edit/:id', component: EditarFotografiaComponent }
    ]
  },
  {
    path: 'director', component: DirectorComponent,
    canActivate: [
      GuardDirectorService
    ]
  },
  {
    path: 'investigador', component: InvestigadorComponent,
    canActivate: [
      GuardInvestigadorService
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
