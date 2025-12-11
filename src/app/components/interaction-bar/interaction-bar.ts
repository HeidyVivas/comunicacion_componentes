import { Component } from '@angular/core';
import { MenuService, MenuState } from '../../services/menu';

@Component({
  selector: 'app-interaction-bar',
  templateUrl: './interaction-bar.html',
  styleUrls: ['./interaction-bar.scss']
})
export class InteractionBarComponent {
  activeButton = 'home'; // para estilizar el botón seleccionado

  constructor(private menuService: MenuService) {}

  // presets para 3 botones
  setHomeMenu() {
    this.activeButton = 'home';
    const menu: MenuState = {
      title: 'Home',
      options: [
        { label: 'Patines', route: '/home' },
        { label: 'balon', route: '/ficha/balon' },
        { label: 'raqueta', route: '/ficha/raqueta' },
        { label: 'Cuarta opcion' }
      ]
    };
    this.menuService.setMenu(menu);
  }

  setSearchMenu() {
    this.activeButton = 'search';
    const menu: MenuState = {
      title: 'Search',
      options: [
        { label: 'Search', route: '/search' },
        { label: 'computadores' },
        { label: 'Electronica' },
        { label: 'Herramientas' }
      ]
    };
    this.menuService.setMenu(menu);
  }

  setHtmlMenu() {
    this.activeButton = 'html';
    const menu: MenuState = {
      title: 'HTML',
      options: [
        { label: 'HTML', route: '/home' },
        { label: 'Octava opcion' },
        { label: 'Otra visual' }
      ]
    };
    this.menuService.setMenu(menu);
  }
}
