import { ProvinceService } from './province.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { IProvince } from './province';

@Component({
    templateUrl: 'app/provinces/province-detail.component.html'
})
export class ProvinceDetailComponent implements OnInit {
    provinces: IProvince[];
    errorMessage: string;
    pageTitle: string;


    constructor(private _provinceService: ProvinceService,
                private _route: ActivatedRoute){
    }
    
    ngOnInit(): void {
        let name = this._route.snapshot.params['name'];
        this.pageTitle = `${name}`;
        this._provinceService.getProvinces()
        .subscribe(provinces => this.provinces = provinces,
               error => this.errorMessage = <any>error);  
    }

}