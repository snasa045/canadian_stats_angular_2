
export interface IProvince {
  provinceName: string;
  provinceCode: string;
  provincePopulation: number;
  topCities: ICities;  
}

interface ICities {
    cityName: string;
    cityPopulation: number;
}