import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeImage',
})
export class PipeImage implements PipeTransform {
  transform(value: string): string {
    if (value) {
      return value;
    } else {
      return '../../../assets/no-image.png';
    }
  }
}
