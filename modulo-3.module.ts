import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { M3Pagina1Component } from './m3-pagina1/m3-pagina1.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'pagina-1'},
  { path: 'pagina-1', component: M3Pagina1Component }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  declarations: [M3Pagina1Component]
})
export class Modulo3Module { }
