import { Component } from '@angular/core';

import { MovementService } from './movement/movement.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MovementService]
})
export class AppComponent {
  title = '4sh-front';

  constructor(private movementService: MovementService) {
  }
}
