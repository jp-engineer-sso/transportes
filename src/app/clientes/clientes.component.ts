import {Component, OnInit} from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { ClienteComponent } from '../cliente/cliente.component';

/**
 * @title Basic grid-list
 */
@Component({
  selector: 'clientes',
  styleUrl: 'clientes.component.scss',
  templateUrl: 'clientes.component.html',
  standalone: true,
  imports: [MatGridListModule, ClienteComponent],
})
export class ClientesComponent implements OnInit{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  /*
  clientes = ClienteComponent[] = [
    {
      id: 1,
      image: 'assets/images/herni.jpg'
    },
    {
      id: 2,
      image: 'assets/images/jp.jpeg'
    }
  
  ]
*/
}
