import { Pipe, PipeTransform } from '@angular/core';
import { Device } from '../models/device';

@Pipe({
  name: 'searchFilter',
  pure: false,
})
export class SearchFilterPipe implements PipeTransform {
  transform(items: any[], filter: any): any {
    if (!items || !filter) {
      return items;
    }
    return items.filter(
      (item: Device) =>
        item?.name?.toLocaleLowerCase()?.includes(filter.toLocaleLowerCase()) ||
        item?.status?.toLocaleLowerCase()?.includes(filter.toLocaleLowerCase())
    );
  }
}
