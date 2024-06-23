import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuBarComponent } from '../../components/menu-bar/menu-bar.component';
import { ChatbotComponent } from '../../components/chatbot/chatbot.component';


@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterOutlet , MenuBarComponent,ChatbotComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent {

}
