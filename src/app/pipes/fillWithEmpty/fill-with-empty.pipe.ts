import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fillWithEmpty',
  standalone: true
})
export class FillWithEmptyPipe<T> implements PipeTransform {
  transform(values: (T | undefined)[][], positions: number[]): (T | undefined)[][] {  
    const mappedValues = values.map(subArray => {
      const newArray = Array.from({ length: subArray.length + positions.length }, (_, index) => {
        return positions.includes(index) ? undefined : subArray[index - positions.filter(pos => pos < index).length];
      });
      return newArray;
    });
    return mappedValues;
  }
}
