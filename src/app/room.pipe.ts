import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'room'
})
export class RoomPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
