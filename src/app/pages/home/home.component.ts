import { ButtonModule } from 'primeng/button';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CaruselImgComponent } from '../../shared/components/carusel-img/carusel-img.component';
import { Carusel02ImgComponent } from '../../shared/components/carusel02-img/carusel02-img.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonModule , RouterOutlet ,CaruselImgComponent , Carusel02ImgComponent ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
