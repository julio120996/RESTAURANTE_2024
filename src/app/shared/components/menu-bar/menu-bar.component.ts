import { Component, Output, output, EventEmitter } from '@angular/core';
import { RouterModule } from '@angular/router'; // Importa RouterModule
import { CommonModule } from '@angular/common';
import { navbarData } from './nav-data';


interface SideNavToggle{
  screenWidth: number;
  collapsed : boolean;
}

@Component({
  selector: 'app-menu-bar',
  standalone: true,
  imports: [CommonModule, RouterModule,],
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent {
  @Output() onToggleSideNav : EventEmitter<SideNavToggle> =  new EventEmitter();
  collapsed = false;
  screenWidth =0;
  navData = navbarData;

  toggleCollapse():void{
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }

  closeSidenav() : void{

    this.collapsed=false;
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }
}





