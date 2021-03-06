import { ProvinceService } from './province.service';
import { IProvince } from './province';
import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'cs-provinces',
    moduleId: module.id,
    templateUrl: 'province-list.component.html',
    // styleUrls: ['province-list.component.css']

})
export class ProvinceListComponent implements OnInit {
    pageTitle: string = 'Province List';
    listFilter: string;
    provinces: IProvince[];
    errorMessage: string;
    populationFilter: number;
    sortBy: string;
    constructor(private _provinceService: ProvinceService){
    }
    
    ngOnInit(): void {
        this._provinceService.getProvinces()
        .subscribe(provinces => this.provinces = provinces,
               error => this.errorMessage = <any>error);  
    }
    
    sortType(sort: string) {
        if (sort === 'provincePopulation'){
            this.provinces = this.provinces.sort(this.sortByPopulation);
        }
    }

    sortByPopulation(a: IProvince, b: IProvince){
        return (b.provincePopulation) - (a.provincePopulation); 
    }
}
