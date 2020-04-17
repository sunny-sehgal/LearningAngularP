import { Component, OnInit } from '@angular/core';
import { reportsService } from '../../services/reports.service';
import { ChartErrorEvent, ChartEvent } from 'angular-google-charts';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // Pie Chart Start
  title = 'Browser market shares at a specific website, 2014';
   type = 'PieChart';
  //  type = 'ComboChart';
   data = [
      ['Firefox', 45.0],
      ['IE', 26.8],
      ['Chrome', 12.8],
      ['Safari', 8.5],
      ['Opera', 6.2],
      ['Others', 0.7] 
   ];
   columnNames = ['Browser', 'Percentage'];
   options = {    
   };
   width = 550;
   height = 400;

   // Pie Chart End

   // Combo Chart Start
  title1 = 'Fruits distribution';
  type1 = 'ComboChart';
  data1 = [
     ["Apples", 3, 2, 2.5],
     ["Oranges",2, 3, 2.5],
     ["Pears", 1, 5, 3],
     ["Bananas", 3, 9, 6],
     ["Plums", 4, 2, 3]
  ];
  columnNames1 = ['Fruits', 'Jane','Jone','Average'];
  options1 = {   
     hAxis: {
        title: 'Person'
     },
     vAxis:{
        title: 'Fruits'
     },
     seriesType: 'bars',
     series: {2: {type: 'line'}}
  };
  width1 = 550;
  height1 = 400;
  public resultChart: any;
  public charts =[];
  public chartType : String = 'Bar Chart';

  chartsTypes = ['Bar Chart','Pie Chart','Bar Chart2'];
  // Combo Chart End
  constructor(private service : reportsService,  private spinner: NgxSpinnerService) { }
  public changeChart(){
   this.getChartsData(this.chartType);
 }
  getChartsData(chartInput:String){
   this.spinner.show();
   this.service.getCharts().subscribe(
     data => {
       this.charts = data;
       this.charts.forEach(element => {
         console.log(element.type);
         if(element.title == chartInput){
           this.resultChart = element;
         }
       });
       this.spinner.hide();
     }, error => {
       console.log(error);
     }, () => {
     }
   );
 }

 public onReady() {
   // console.log('Chart ready');
 }

 public onError(error: ChartErrorEvent) {
   // console.error('Error: ' + error.message.toString());
 }

 public onSelect(event: ChartEvent) {
   // console.log('Selected: ' + event.toString());
 }

 public onMouseEnter(event: ChartEvent) {
   // console.log('Hovering ' + event.toString());
 }

 public onMouseLeave(event: ChartEvent) {
   // console.log('No longer hovering ' + event.toString());
 }

  ngOnInit(): void {
   this.getChartsData(this.chartType);
  }

}
