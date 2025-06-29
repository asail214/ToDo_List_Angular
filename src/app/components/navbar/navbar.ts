import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
  imports: [RouterLink, RouterLinkActive] // ✅ Added RouterLinkActive for active states
})
export class NavbarComponent {}