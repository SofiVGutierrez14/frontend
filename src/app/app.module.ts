import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { AcercademiComponent } from './componentes/acercademi/acercademi.component';
import { ExpLaboralComponent } from './componentes/exp-laboral/exp-laboral.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { SkillsComponent } from './skills/skills.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HysComponent } from './componentes/hys/hys.component';
import { HttpClientModule } from "@angular/common/http";
import { FooterComponent } from './componentes/footer/footer.component';
import { Pagina404Component } from './componentes/pagina404/pagina404.component';
import { IndexComponent } from './componentes/index/index.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
AcercademiComponent,
     ExpLaboralComponent,
     EducacionComponent,
     SkillsComponent,
     ProyectosComponent,
     BannerComponent,
     HysComponent,
     FooterComponent,
      Pagina404Component,
      IndexComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
NgCircleProgressModule.forRoot({}),
HttpClientModule



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
