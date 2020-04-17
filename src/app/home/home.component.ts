import { Component, OnInit } from '@angular/core';

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
  // Combo Chart End
  constructor() { }

  ngOnInit(): void {
  }

}
