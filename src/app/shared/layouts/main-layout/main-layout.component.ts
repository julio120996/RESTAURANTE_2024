import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChatbotComponent } from '../../components/chatbot/chatbot.component';
import { MenuBarComponent } from '../../components/menu-bar/menu-bar.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterOutlet, ChatbotComponent , MenuBarComponent],
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'] // Corrección aquí
})
export class MainLayoutComponent { }
