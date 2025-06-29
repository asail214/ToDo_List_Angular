import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.html',
  styleUrl: './about.scss',
  imports: [RouterLink] // ✅ Added RouterLink for navigation buttons
})
export class AboutComponent {}