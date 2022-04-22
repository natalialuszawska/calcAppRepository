import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BmiComponent } from './bmi/bmi.component';
import { TitleTabComponent } from './title-tab/title-tab.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgChartsModule } from 'ng2-charts';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { CukierComponent } from './cukier/cukier.component';
import { KcalreqComponent } from './kcalreq/kcalreq.component';
import { WaterComponent } from './water/water.component';
import { BodyComponent } from './body/body.component';
@NgModule({
  declarations: [
    AppComponent,
    BmiComponent,
    TitleTabComponent,
    NavbarComponent,
    CukierComponent,
    KcalreqComponent,
    WaterComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgChartsModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
