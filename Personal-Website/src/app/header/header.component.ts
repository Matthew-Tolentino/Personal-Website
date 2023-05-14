import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  menuToggle (menu: any, navList: any) {
    menu.classList.toggle('bx-x');
    navList.classList.toggle('open');
  }
}
