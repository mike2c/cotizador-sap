import { Component, OnInit } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';
import { MENU_ITEMS } from './menu-items';

@Component({
  selector: 'ngx-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  currentTheme: any;
  themes: any;
  menuItems = MENU_ITEMS;
  user: any = undefined;
  userMenu = [ { title: 'Profile' }, { title: 'Log out' } ];
  userPictureOnly: boolean = true;

  constructor(private sidebarService: NbSidebarService) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('userdata'));
  }

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
