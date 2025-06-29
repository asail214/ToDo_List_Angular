import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrl: './home.scss',
  imports: [RouterLink] 
})
export class HomeComponent {}