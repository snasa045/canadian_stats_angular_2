import { PopulationSortPipe } from './provinces/province-sort.pipe';
import { RouterModule } from '@angular/router';
import { ProvinceDetailComponent } from './provinces/province-detail.component';
import { HttpModule } from '@angular/http';
import { ProvinceFilterPipe } from './provinces/province-filter.pipe';
import { FormsModule } from '@angular/forms';
import { ProvinceListComponent } from './provinces/province-list.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';

@NgModule({
  imports: [ BrowserModule,
     FormsModule, 
     HttpModule, 
     RouterModule.forRoot([
       {path: 'provinces', component: ProvinceListComponent},
       {path: 'province/:name', component: ProvinceDetailComponent},
       {path: '', redirectTo: 'provinces', pathMatch:'full'},
       {path: '**', redirectTo: 'provinces', pathMatch:'full'},
     ], { useHash: true }) ],

  declarations: [ AppComponent, 
    ProvinceListComponent, 
    ProvinceFilterPipe, 
    ProvinceDetailComponent, 
    PopulationSortPipe],
    
  bootstrap: [ AppComponent ]
})
export class AppModule {}
