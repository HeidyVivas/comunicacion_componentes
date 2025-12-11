import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface MenuOption {
  label: string;
  route?: string;
}

export interface MenuState {
  title: string;
  options: MenuOption[];
}

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private menuSource = new BehaviorSubject<MenuState>({
    title: 'Home',
    options: [
      { label: 'Patines', route: '/home' },
      { label: 'balon', route: '/ficha/balon' },
      { label: 'raqueta', route: '/ficha/raqueta' },
      { label: 'Cuarta opcion' }
    ]
  });

  menu$ = this.menuSource.asObservable();

  setMenu(menu: MenuState) {
    this.menuSource.next(menu);
  }
}
