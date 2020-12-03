import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 2, rows: 1 , height:'300px'},
          { title: 'Card 2', cols: 1, rows: 1 , height:'400px' },
          { title: 'Card 3', cols: 1, rows: 1 , height:'400px'},
          { title: 'Card 4', cols: 1, rows: 1 , height:'400px'}
        ];
      }

      return [
        { title: 'Card 1', cols: 2, rows: 1 , height:'300px'},
        { title: 'Card 2', cols: 1, rows: 1 , height:'400px'},
        { title: 'Card 3', cols: 1, rows: 1 , height:'400px'},
        { title: 'Card 4', cols: 1, rows: 1 , height:'400px'}
      ];
    })
  );

  // lat = 22.2736308;
  // long = 70.7512555;

  constructor(private breakpointObserver: BreakpointObserver) { }
}
