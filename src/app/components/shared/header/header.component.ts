import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { MenuItem } from 'primeng/api';
import { MenuModule } from 'primeng/menu';
import { BadgeModule } from 'primeng/badge';
import { RippleModule } from 'primeng/ripple';
import { AvatarModule } from 'primeng/avatar';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-header',
  imports: [
    MenuModule,
    AvatarModule,
    RippleModule,
    BadgeModule,
    DividerModule,
    NgIf
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  public items!: MenuItem[];

  constructor(private router: Router) { }

  ngOnInit() {
    this.items = [
      {
        label: 'Library',
        items: [
          {
            label: 'Books',
            icon: 'pi pi-book',
            route: '/books'
          },
          {
            label: 'Authors',
            icon: 'pi pi-users',
            route: '/books'
          }
        ]
      },
      {
        label: 'Profile',
        items: [
          {
            label: 'My Favorites',
            icon: 'pi pi-heart',
            route: '/books'
          },
          {
            label: 'Settings',
            icon: 'pi pi-cog',
            route: '/books'
          },
          {
            label: 'Logout',
            icon: 'pi pi-sign-out',
            command: () => {
              this.router.navigate(['/books']);
            }
          }
        ]
      },
      {
        separator: true
      }
    ];
  }
}
