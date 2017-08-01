
import { IProvince } from './province';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()

export class ProvinceService {
    
    private _provinceUrl = 'api/provinces/provinces.json';

    constructor(private _http: Http){}

    getProvinces(): Observable<IProvince[]> {
        return this._http.get(this._provinceUrl)
            .map((response: Response) => <IProvince[]> response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError); 
    }

     getProvince(name: string): Observable<IProvince> {
        return this.getProvinces()
            .map((provinces: IProvince[]) => provinces.find(p => p.provinceName === name));
    }

    private handleError(error: Response){
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}