import { Component, OnInit } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';
import { MENU_ITEMS } from './menu-items';

@Component({
  selector: 'ngx-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {

  currentTheme: any;
  themes: any;
  menuItems = MENU_ITEMS;

  constructor(private sidebarService: NbSidebarService) { }

  changeTheme($event: any) {
    throw new Error('Method not implemented.');
  }

  navigateHome() {
    throw new Error('Method not implemented.');
  }

  toggleSidebar(): boolean {
  
    this.sidebarService.toggle(true, 'menu-sidebar');
    // this.layoutService.changeLayoutSize();

    return false;
  }
}
