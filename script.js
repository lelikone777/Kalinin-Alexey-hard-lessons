'use strict'

let lang;

let engDays = 'понедельник, вторник, среда, четверг, пятница, суббота, воскресенье';
let rusDays = 'monday, tuesday, wednesday, fourthday, friday, saturday, sunday';

if (lang = 'en') {
  console.log(engDays);
} else if (lang = 'ru') {
  console.log(ruDays);
}

switch (lang){
  case en:
    console.log(engDays); 
    break
  case ru:
    console.log(ruDays);
    break
}









