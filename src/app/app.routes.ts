import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import path from 'node:path';
import { MainLayoutComponent } from './shared/layouts/main-layout/main-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { ListaPedidosPendientesComponent } from './module/pedidos/pedidosPendientes/lista-pedidos-pendientes/lista-pedidos-pendientes.component';
import { ListarPedidosEnviadosComponent } from './module/pedidos/pedidosEnviados/listar-pedidos-enviados/listar-pedidos-enviados.component';
import { ListarReservaNormalComponent } from './module/reservas/reservaNormla/listar-reserva-normal/listar-reserva-normal.component';
import { ListarReservaSemiVIPComponent } from './module/reservas/reservaSemiVIP/listar-reserva-semi-vip/listar-reserva-semi-vip.component';
import { ListarReservaVIPComponent } from './module/reservas/reservaVIP/listar-reserva-vip/listar-reserva-vip.component';
import { ListarUserComponent } from './module/usuarios/listar-user/listar-user.component';

export const routes: Routes = [


    { path : '' , pathMatch : "full" , redirectTo:"Principal"},

  { path : 'Principal' , component :MainLayoutComponent  , children: [

                {path : '' , pathMatch :"full" , redirectTo:"Home"},
                {path :'Home' , component : HomeComponent },
                {path : 'Pedidos Enviados' , component :ListarPedidosEnviadosComponent} ,
                {path : 'Pedidos Pendientes', component :ListaPedidosPendientesComponent},
                {path :'Reserva Normal' , component : ListarReservaNormalComponent },
                {path : 'ReservaSemi VIP' , component :ListarReservaSemiVIPComponent} ,
                {path : 'Reserva VIP', component :ListarReservaVIPComponent},
                {path : 'Usuarios', component :ListarUserComponent}
  ] }

  
];


