import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InteractionBarComponent } from "./components/interaction-bar/interaction-bar";
import { NavBarComponent } from "./components/nav-bar/nav-bar";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, InteractionBarComponent, NavBarComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('comunicacion_componentes');
}
