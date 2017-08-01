// import { ProvinceDetailService } from './provinces/province-detail.service';
import { ProvinceService } from './provinces/province.service';
import { Component } from '@angular/core';

@Component({
    selector: 'cs-app',
    template: `
   
 <div>
        <nav class='container-fluid navbar navbar-default row'>
            <div class="row">

            <div class="col-md-2 col-sm-2">

            </div>
            <div class="col-md-5 col-sm-5">
            <h1>{{pageTitle}}</h1>
            
            </div>             
            <div class="col-md-5 col-sm-5">
            </div>             
            
            </div>
            
        </nav>
        <div class='container'>
            <router-outlet></router-outlet>
        </div>
     </div>

    `
    ,

    providers: [ProvinceService]
})
export class AppComponent {
    pageTitle: string = `Canadian Stats`;
}
