import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './componentes/index/index.component';
import { Pagina404Component } from './componentes/pagina404/pagina404.component';

const routes: Routes = [
  {path:'',component:IndexComponent},
{path:'index',component:IndexComponent},
{path:'',redirectTo:'/',pathMatch:'full'},
{path:'**',component:Pagina404Component}
];

@NgModule({
  imports: [CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
