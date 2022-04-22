import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BmiComponent } from './bmi/bmi.component';
import { TitleTabComponent } from './title-tab/title-tab.component';
import { CukierComponent } from './cukier/cukier.component';
import { KcalreqComponent } from './kcalreq/kcalreq.component';
import { WaterComponent } from './water/water.component';
import { BodyComponent } from './body/body.component';
const routes: Routes = [
  { path: '', component: TitleTabComponent},
  { path: 'bmi', component: BmiComponent},
  { path: 'water', component: WaterComponent},
  {path: 'sugar', component: CukierComponent},
  { path: 'kcal', component: KcalreqComponent},
  {path: 'bodyShape',component: BodyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
