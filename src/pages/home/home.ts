import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

// import { DatePicker } from '@ionic-native/date-picker/ngx';
// constructor(private datePicker: DatePicker) { }


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {


  }
  ionViewDidLoad() {
    main();
    setInterval(main, 1000);
  }

}

function main(){
  // get current date
  var t1 = new Date()
  // get date/time school Ends
  // 5/16/19
  var t2 = new Date(2019, 4, 16, 0, 0, 0, 0);
  console.log(document.getElementById("oink").value)
  var dateInput = document.getElementById("oink").value;
  if (dateInput){
    t2 = new Date(dateInput);
  }
  // find differance
  var dif = t1.getTime() - t2.getTime();
  var Seconds_from_T1_to_T2 = dif / 1000;
  var Seconds_Between_Dates = Math.abs(Seconds_from_T1_to_T2);
  Seconds_Between_Dates = Math.floor(Seconds_Between_Dates)
  var theDiv2 = document.getElementById("numSeconds");
  theDiv2.innerHTML = Seconds_Between_Dates + " Seconds";

  var minBetweenDates = Math.floor(Seconds_Between_Dates / 60)
  var theDiv3 = document.getElementById("numMins");
  theDiv3.innerHTML = minBetweenDates + " Minutes";

  var HoursBetweenDates = Math.floor(minBetweenDates / 60)
  var theDiv4 = document.getElementById("numHours");
  theDiv4.innerHTML = HoursBetweenDates + " Hours";



  var daysBetweenDates = Seconds_Between_Dates / 86400
  daysBetweenDates = Math.floor(daysBetweenDates);
  var theDiv = document.getElementById("numDays");
  theDiv.innerHTML = daysBetweenDates + " Days";


  // update number 

}



























function date() {
  // const monthNames = ["January", "February", "March", "April", "May", "June",
  //   "July", "August", "September", "October", "November", "December"
  // ];
  //   var qntYears = 4;
  //   var selectYear = getElementById("year");
  //   var selectMonth = getElementById("month");
  //   var selectDay = getElementById("day");
  //   var currentYear = new Date().getFullYear();
  //
  //   for (var y = 0; y < qntYears; y++){
  //     let date = new Date(currentYear);
  //     var yearElem = document.createElement("option");
  //     yearElem.value = currentYear
  //     yearElem.textContent = currentYear;
  //     selectYear.append(yearElem);
  //     currentYear--;
  //   }
  //
  //   for (var m = 0; m < 12; m++){
  //       let monthNum = new Date(2018, m).getMonth()
  //       let month = monthNames[monthNum];
  //       var monthElem = document.createElement("option");
  //       monthElem.value = monthNum;
  //       monthElem.textContent = month;
  //       selectMonth.append(monthElem);
  //     }
  //     var d = new Date();
  //     var month = d.getMonth();
  //     var year = d.getFullYear();
  //     var day = d.getDate();
  //     selectYear.val(year);
  //     selectYear.on("change", AdjustDays);
  //     selectMonth.val(month);
  //     selectMonth.on("change", AdjustDays);
  //     AdjustDays();
  //     selectDay.val(day)
  //     function AdjustDays(){
  //       var year = selectYear.val();
  //       var month = parseInt(selectMonth.val()) + 1;
  //       selectDay.empty();
  //       //get the last day, so the number of days in that month
  //       var days = new Date(year, month, 0).getDate();
  //       //lets create the days of that month
  //       for (var d = 1; d <= days; d++){
  //         var dayElem = document.createElement("option");
  //         dayElem.value = d;
  //         dayElem.textContent = d;
  //         selectDay.append(dayElem);
  //       }
  //     }
}
