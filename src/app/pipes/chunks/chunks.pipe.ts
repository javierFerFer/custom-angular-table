import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'chunks',
  standalone: true
})
export class ChunksPipe<T> implements PipeTransform {
  transform(values: T[], chunkSize: number): T[][] {
    const chunks: T[][] = [];

    for (let i = 0; i < values.length; i += chunkSize) {
      const chunk = values.slice(i, i + chunkSize);
      chunks.push(chunk);
    }

    return chunks;
  }
}
