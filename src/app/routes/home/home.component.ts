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

  // Line Chart Start

  title2 = 'Average Temperatures of Cities';
   type2 = 'LineChart';
   data2 = [
      ["Jan",  7.0, -0.2, -0.9, 3.9],
      ["Feb",  6.9, 0.8, 0.6, 4.2],
      ["Mar",  9.5,  5.7, 3.5, 5.7],
      ["Apr",  14.5, 11.3, 8.4, 8.5],
      ["May",  18.2, 17.0, 13.5, 11.9],
      ["Jun",  21.5, 22.0, 17.0, 15.2],
      ["Jul",  25.2, 24.8, 18.6, 17.0],
      ["Aug",  26.5, 24.1, 17.9, 16.6],
      ["Sep",  23.3, 20.1, 14.3, 14.2],
      ["Oct",  18.3, 14.1, 9.0, 10.3],
      ["Nov",  13.9,  8.6, 3.9, 6.6],
      ["Dec",  9.6,  2.5,  1.0, 4.8]
   ];
   columnNames2 = ["Month", "Tokyo", "New York","Berlin", "Paris"];
   options2 = {   
      hAxis: {
         title: 'Month'
      },
      vAxis:{
         title: 'Temperature'
      },
   };
   width2 = 550;
   height2 = 400;
   // Line Chart End
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
