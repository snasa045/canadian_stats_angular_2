import { IProvince } from './province';
import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class PopulationSortPipe implements PipeTransform {
  transform(array: IProvince[], args: number): IProvince[] {
    array.sort((a: any, b: any) => {
      if (a.provincePopulation[args] < b.provincePopulation[args]) {
        return -1;
      } else if (a.provincePopulation[args] > b.provincePopulation[args]) {
        return 1;
      } else {
        return 0;
      }
    });
    return array;
  }
}