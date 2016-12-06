/*
	*@이벤트 등록 메서드
	*@obj {object} 이벤트 대상
	*@evName {string} 이벤트명
	*@evH {fuction} 이벤트 핸들러
*/

var t = new Date();

function addEv(obj, evName, evH) {
	if(document.addEventListener) {
		obj.addEventListener(evName,evH);
	} else {
		obj.attachEvent("on"+evName,evH);
	}	
}

function makeCalendar() {
	var calendar_table = document.querySelector(".calendar_table");
	var thisYear = t.getFullYear();
	var thisMonth = t.getMonth();
	var thisDate = t.getDate();
	var arrDate=[31,28,31,30,31,30,31,31,30,31,30,31];
	if(thisYear %4 == 0 && thisYear % 100 !=0 || thisYear % 400 == 0) {
		arrDate[1] = 29;
	}
	var lastDate = arrDate[thisMonth];
	var firstObj = new Date(thisYear,thisMonth,1);
	var yoil = firstObj.getDay();
	var row = Math.ceil((yoil + lastDate) / 7);
	var tb = "<table border ='1'>";
		  tb += "<thead>";
		  tb += "<tr>";
		  tb += "<th>일</th>";
		  tb += "<th>월</th>";
		  tb += "<th>화</th>";
		  tb += "<th>수</th>";
		  tb += "<th>목</th>";
		  tb += "<th>금</th>";
		  tb += "<th>토</th>";
		  tb += "</tr>";
		  tb += "</thead>";
		  tb += "<tbody>";

		  var num = 1;
		  
		  for (var i = 1; i <= row ; i++ ) {
			tb += "<tr>";	
				for (var k = 1; k <= 7 ; k++ ) {
					if(i == 1 && k <= yoil || num > lastDate) {
						tb += "<td> </td>";
					} else{
						tb += "<td>" +num+  "</td>";
						num++;
					}
				}
			tb += "</tr>";
		  }
		  tb += "</tbody>";
		  tb += "</table>";


	var calendar_info = document.querySelector(".calendar_info");
	calendar_info.innerHTML = thisYear + "." + (thisMonth+1);

//	var t = "123456789";
	calendar_table.innerHTML = tb;	
}

var init_calendar = function() {
	makeCalendar();
	var btnNext = document.querySelector(".btnNext");		
	var btnPrev = document.querySelector(".btnPrev");		
	
	var nextMonth = function () {
		t.setMonth(t.getMonth()+1);
		makeCalendar();
	} 
	addEv(btnNext,"click",nextMonth);

	var prevMonth = function () {
		t.setMonth(t.getMonth()-1);
		makeCalendar();
	} 
	addEv(btnPrev,"click",prevMonth);
}	
addEv(window,"load",init_calendar);

	