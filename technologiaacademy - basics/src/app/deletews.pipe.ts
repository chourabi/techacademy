import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'deletews'
})
export class DeletewsPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    const sep = value.split(" ").join("");
    return sep;
  }

}
