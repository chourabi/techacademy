import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    console.log(args);
    
    return value+"**";
  }

}
