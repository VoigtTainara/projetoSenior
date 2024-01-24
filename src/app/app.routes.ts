import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlmoxarifeComponent } from '../almoxarife/almoxarife.component';
import { AdministrativoComponent } from '../administrativo/administrativo.component';

export const routes: Routes = [
    { path: 'almoxarife', component: AlmoxarifeComponent },
    { path: 'administrativo', component: AdministrativoComponent },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}