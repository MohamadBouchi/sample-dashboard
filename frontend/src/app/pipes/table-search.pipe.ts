import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tableSearch',
  pure: false
})

export class TableSearchPipe implements PipeTransform {
  transform(users: any[], searchValue: String): any {
    if (!searchValue || !users) { return users; }
    return users.filter(user => {
      if (user.first_name !== undefined) {
        return user.first_name.toLocaleLowerCase().match(searchValue.toLowerCase());
      }
    });
  }
}
