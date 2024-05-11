import {Component, HostListener} from '@angular/core';
import {NgClass, NgOptimizedImage} from "@angular/common";
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgClass,
    RouterLink,
    NgOptimizedImage,
    RouterLinkActive
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isSticky: boolean = false;
  showMenu = false;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const offset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isSticky = offset >= 300;
  }

}
