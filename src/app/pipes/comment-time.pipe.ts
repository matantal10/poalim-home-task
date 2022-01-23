import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'commentTime'
})
export class CommentTimePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
