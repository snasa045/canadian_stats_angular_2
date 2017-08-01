import { IProvince } from './province';
import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name:'provinceFilter'
})
export class ProvinceFilterPipe implements PipeTransform{
    transform(value: IProvince[], filterBy: string) : IProvince[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;    
        return filterBy ? value.filter((province: IProvince) => 
            province.provinceName.toLowerCase().indexOf(filterBy) !== -1) : value;
    }
}