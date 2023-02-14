import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';

const MaterialComponents = [
  MatToolbarModule,
  MatGridListModule,
  MatCardModule,
  MatButtonModule,
  MatInputModule,
  MatExpansionModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatSlideToggleModule,
  MatSnackBarModule
]
@NgModule({
  imports: [
    MaterialComponents
  ],
  exports: [
    MaterialComponents
  ]
})
export class MaterialModule { }
