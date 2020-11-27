import { Component, OnInit } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  // text: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
    opened = false;

    menuItems = ['dashboard', 'sales', 'orders', 'customers', 'products']

    tiles: Tile[] = [
      {cols: 3, rows: 1, color: 'lightblue'},
      {cols: 1, rows: 2, color: 'lightgreen'},
      {cols: 1, rows: 1, color: 'lightpink'},
      {cols: 2, rows: 1, color: '#DDBDF1'},
    ];
}
