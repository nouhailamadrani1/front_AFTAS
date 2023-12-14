import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeFormat'
})
export class TimeFormatPipe implements PipeTransform {
  transform(time: { hours: number, minutes: number }): string {
    const hoursStr = time.hours < 10 ? `0${time.hours}` : `${time.hours}`;
    const minutesStr = time.minutes < 10 ? `0${time.minutes}` : `${time.minutes}`;
    return `${hoursStr}:${minutesStr}`;
  }
}