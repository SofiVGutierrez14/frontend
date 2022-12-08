import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AcercademiComponent } from './acercademi/acercademi.component';
import { EducacionComponent } from './educacion/educacion.component';
import { ExperienciaLaboralComponent } from './experienciaLaboral/experienciaLaboral.component';
import { FooterComponent } from './footer/footer.component';
import { HysComponent } from './hys/hys.component';
import { BannerComponent } from './banner/banner.component';
import { NgCircleProgressModule } from 'ng-circle-progress';




@NgModule({
  declarations: [
    AppComponent,
  NavbarComponent,
 AcercademiComponent,
      EducacionComponent,
      ExperienciaLaboralComponent,
      FooterComponent,
      HysComponent,
      BannerComponent
   ],
  imports: [
    NgCircleProgressModule.forRoot({}),
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {   }
