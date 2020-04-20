import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
  })

export class reportsService{
    chartsData = 'assets/data/charts.json';

    constructor(private http: HttpClient) { }

    getCharts(){
       return this.http.get(this.chartsData).pipe(map((chart: any) => chart));
        //return this.http.post("http://localhost:8081/apsc/apsconfig/secured/getChartData",{}).pipe(map((chart: any) => chart));
    }

}
