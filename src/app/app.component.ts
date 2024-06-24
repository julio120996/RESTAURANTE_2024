import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuBarComponent } from "./shared/components/menu-bar/menu-bar.component";

interface SideNavToggle{
  screenWidth: number;
  collapsed : boolean;
}

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, MenuBarComponent]
})
export class AppComponent {
  title = 'Proyect_Restaurante';

isSideNavCollapsed=false;
screenWidth=0;

  onToggleSideNav(data: SideNavToggle): void{
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }
}
