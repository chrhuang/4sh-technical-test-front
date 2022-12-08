import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

import { MovementService } from '../movement.service';
import { Movement } from '../movement';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent {
  movements: Movement[] = [];

  constructor(private movementService: MovementService) {
  }

  ngOnInit() {
    console.log('On init...');
    this.movementService.getMovements().subscribe((data: any) => {
      this.movements = data;
      console.log(data);
    });
  }
}
