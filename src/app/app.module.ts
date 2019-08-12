import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CubeComponent } from './cube/cube.component';
import { PointsCloudComponent } from './points-cloud/points-cloud.component';

@NgModule({
  declarations: [
    AppComponent,
    CubeComponent,
    PointsCloudComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
