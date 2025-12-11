import { Component, OnDestroy, OnInit } from '@angular/core';
import { MenuService, MenuState, MenuOption } from '../../services/menu';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { NgFor, NgForOf } from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.html',
  styleUrls: ['./nav-bar.scss'],
  imports: [NgForOf]
  
})
export class NavBarComponent implements OnInit, OnDestroy {
  menu: MenuState = { title: '', options: [] };
  subs = new Subscription();
  activeOptionLabel: string | null = null;

  constructor(private menuService: MenuService, private router: Router) {}

  ngOnInit() {
    this.subs.add(
      this.menuService.menu$.subscribe(m => {
        this.menu = m;
        // reset selected option visual
        this.activeOptionLabel = null;
      })
    );
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  onSelect(option: MenuOption) {
    // marcar visualmente
    this.activeOptionLabel = option.label;
    // si la opción tiene ruta, navegar
    if (option.route) {
      // si incluye id en route ya está
      this.router.navigate([option.route]);
    }
  }

  isActive(option: MenuOption) {
    return this.activeOptionLabel === option.label;
  }
}
