// weekday.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'weekday',
})
export class WeekdayPipe implements PipeTransform {
  transform(value: Date) {
    let weekday = '';
    switch (value.getDay()) {
      case 0:
        weekday = 'Sunday';
        break;
      case 1:
        weekday = 'Monday';
        break;
      case 2:
        weekday = 'Tuesday';
        break;
      case 3:
        weekday = 'Wednesday';
        break;
      case 4:
        weekday = 'Thursday';
        break;
      case 5:
        weekday = 'Friday';
        break;
      case 6:
        weekday = 'Saturday';
        break;
      default:
        weekday = 'a new day';
        break;
    }
    return weekday;
  }
}
