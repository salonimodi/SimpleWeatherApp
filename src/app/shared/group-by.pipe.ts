import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'groupBy',
  standalone: true
})
export class GroupByPipe implements PipeTransform {
  transform(collection: Array<any>, property: string): Array<any> {
    if (!collection) {
      return [];
    }
    const today = new Date();
    const todayString = today.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

    const groupedCollection = collection.reduce((previous, current) => {
      const date = new Date(current.dt_txt);
      const day = date.toLocaleDateString('en-US', { weekday: 'long' });

      if (day !== todayString && !previous[day]) {
        previous[day] = current;
      }

      return previous;
    }, {});

    return Object.keys(groupedCollection).map(key => ({ key, value: groupedCollection[key] }));
  }
}
