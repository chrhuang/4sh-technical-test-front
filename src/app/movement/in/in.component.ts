import { Component, OnInit } from '@angular/core';
import { Movement } from '../movement';
import { MovementService } from '../movement.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-in',
  templateUrl: './in.component.html',
  styleUrls: ['./in.component.scss']
})
export class InComponent implements OnInit {
  movement: Movement = new Movement();
  constructor(private movementService: MovementService, private router: Router) { }

  ngOnInit() {
  }

  saveMovement() {
    this.movementService.createMovement(this.movement, true).subscribe(data => {
      this.goToIndex();
    },
      error => console.log(error));
  }

  goToIndex() {
    this.router.navigate(['']);
  }

  onSubmit() {
    console.log(this.movement);

    this.saveMovement();
  }
}
