import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import { MainModule } from './main/main.module';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./main/main.module').then(m => MainModule) ,
  },

]
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserModule,
    HttpClientModule,

    RouterModule.forRoot(routes),
    MainModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
