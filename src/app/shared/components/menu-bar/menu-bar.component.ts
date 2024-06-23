import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';


@Component({
  selector: 'app-menu-bar',
  standalone: true,
  imports: [MenubarModule ,ButtonModule, MenuModule ] ,
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.scss'
})
export class MenuBarComponent implements OnInit{
  itemsMenuBar: MenuItem[] | undefined;

  itemsMenuUsuario: MenuItem[] | undefined;

  ngOnInit() {
    this.itemsMenuBar = [
      {
          label: 'Inicio',
          icon: 'pi pi-home',
           routerLink : '/Principal'
      },
      {
          label: 'Pedidos',
          icon: 'pi pi-cart-minus',
          items:[{
            label : 'Pendientes',
            icon : 'pi pi-clock',
            routerLink : '/Principal/PedidosPendientes'

          },
          {
             label : 'Enviados',
             icon : 'pi pi-send',
              routerLink : '/Principal/PedidosEnviados'
          }
        ]
      },
      {
        label: 'Reservas',
        icon: 'pi pi-book',
        items:[{
          label :'Normal' ,
          icon:'pi pi-sparkles',
          routerLink : '/Principal/ReservaNormal'
          
        },
        {
          label: 'Semi VIP',
          icon : 'pi pi-trophy',
          routerLink : '/Principal/ReservaSemiVIP'

        },
        {
          label : 'VIP',
          icon : 'pi pi-crown',
          routerLink : '/Principal/ReservaVIP'
        }
        
        ]
    } ,
     {
      label: 'Usuarios',
      icon: 'pi pi-users',
      routerLink : '/Principal/Usuarios'
      }
  ] ,
  this.itemsMenuUsuario=[
    {
      label :'Ver Perfil',
      icon : 'pi pi-user'

    },

    {
      label :'Cerrar Seccion',
      icon : 'pi pi-sign-out'

    }
    


  ]
  }


  
              
              
}
