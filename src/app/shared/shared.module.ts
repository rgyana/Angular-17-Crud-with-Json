import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { LayoutComponent } from './layout/layout.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
  ]
})
export class SharedModule { }
