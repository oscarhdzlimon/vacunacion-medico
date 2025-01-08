import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GroupingService {
  groupBy(items: any[], key: string): any[] {
    return items.reduce((groups, item) => {
      const groupKey = item[key];
      if (!groups[groupKey]) {
        groups[groupKey] = [];
      }
      groups[groupKey].push(item);
      return groups;
    }, {});
  }
}
