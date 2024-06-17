import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { Pedidosp } from '../../../../core/models/PedidoP';

@Component({
  selector: 'app-lista-pedidos-pendientes',
  standalone: true,
  imports: [ButtonModule , TableModule],
  templateUrl: './lista-pedidos-pendientes.component.html',
  styleUrl: './lista-pedidos-pendientes.component.scss'
})


export class ListaPedidosPendientesComponent {

  ButtonStyle={
   
    width : '2.3rem',
    height:'2.3rem',
    'margin-left':'1rem'
  }

  pedidoss : Pedidosp [] = [
    {
    
    
      id : 1,
    nombre  : 'jose mena',
    apellidos: 'Terrez carasco',
    fecha: '12/6/2024',
    menu: 'arroz cin pollo',
    cantidad  : 2 ,
    total : 58.9
    } ,
    
  ]
}