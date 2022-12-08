import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './movement/index/index.component';
import { InComponent } from './movement/in/in.component';
import { OutComponent } from './movement/out/out.component';

const routes: Routes = [
  { path: '', redirectTo: 'movements', pathMatch: 'full' },
  { path: 'movements', component: IndexComponent, pathMatch: 'full' },
  { path: 'in', component: InComponent, pathMatch: 'full' },
  { path: 'out', component: OutComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
