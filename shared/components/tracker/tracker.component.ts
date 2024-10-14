import { CommonModule } from '@angular/common';
import { Component,Input } from '@angular/core';
import { MatDivider } from '@angular/material/divider';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-tracker',
  standalone: true,
  imports: [MatIcon,MatDivider, CommonModule],
  templateUrl: './tracker.component.html',
  styleUrl: './tracker.component.scss'
})
export class TrackerComponent {

@Input() activeStep:any
@Input() steps:any

}
