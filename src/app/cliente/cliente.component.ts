import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatCardModule} from '@angular/material/card';

/**
 * @title Basic cards
 */
@Component({
  selector: 'cliente',
  templateUrl: 'cliente.component.html',
  standalone: true,
  imports: [MatCardModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClienteComponent {}
