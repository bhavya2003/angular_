import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-addresscard',
  standalone: true,
  imports: [],
  templateUrl: './addresscard.component.html',
  styleUrl: './addresscard.component.scss'
})
export class AddresscardComponent {

  @Input() address:any



}
