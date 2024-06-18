import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { Pedidosp } from '../../../../core/models/PedidoP';

@Component({
  selector: 'app-listar-pedidos-enviados',
  standalone: true,
  imports: [ButtonModule,TableModule],
  templateUrl: './listar-pedidos-enviados.component.html',
  styleUrl: './listar-pedidos-enviados.component.scss'
})
export class ListarPedidosEnviadosComponent {

  ButtonStyle={
   
    width : '2.3rem',
    height:'2.3rem',
    'margin-left':'1rem'
  }

  pedidosE : Pedidosp [] = [
    {
    
    
      id : 1,
    nombre  : 'Cesar',
    apellidos: 'Castillo Colca',
    fecha: '12/6/2024',
    menu: 'Mariscos',
    cantidad  : 2 ,
    total : 85.2
    } ,
    {
    
    
      id : 2,
    nombre  : 'Fabian',
    apellidos: 'monterei camilo',
    fecha: '12/6/2024',
    menu: 'amburgesa',
    cantidad  : 2 ,
    total : 12.6
    } ,
    {
    
    
      id : 3,
    nombre  : 'Keyla',
    apellidos: 'losano terres',
    fecha: '17/6/2024',
    menu: 'ceviche',
    cantidad  : 1 ,
    total : 25.2
    } 
  
    
    
    
    
  ]
}
