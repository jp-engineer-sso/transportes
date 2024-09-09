import { Component } from '@angular/core';
import { HeaderComponent } from './../header/header.component'
import { BannerComponent } from "../banner/banner.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, BannerComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
