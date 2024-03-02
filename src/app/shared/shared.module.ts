import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
