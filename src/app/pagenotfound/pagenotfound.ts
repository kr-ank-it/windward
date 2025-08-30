import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {MatCard, MatCardActions, MatCardContent, MatCardImage} from '@angular/material/card';
import {MatButton} from '@angular/material/button';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-pagenotfound',
  imports: [
    RouterLink,
    MatCard,
    MatCardImage,
    MatCardContent,
    MatCardActions,
    MatButton,
    NgOptimizedImage
  ],
  templateUrl: './pagenotfound.html',
  styleUrl: './pagenotfound.css'
})
export class Pagenotfound {

}
