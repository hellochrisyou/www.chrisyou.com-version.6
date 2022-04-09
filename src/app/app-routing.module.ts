import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackgroundComponent } from './features/background/background.component';
import { HomeComponent } from './features/home/home.component';
import { PrevVersionComponent } from './features/prev-version/prev-version.component';
import { ProjectComponent } from './features/project/project.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: { state: 'home' }
  },
  {
    path: 'background',
    component: BackgroundComponent,
    data: { state: 'background' },
  },
  {
    path: 'project',
    component: ProjectComponent,
    data: { state: 'project' },
  },
  {
    path: 'previous-versions',
    component: PrevVersionComponent,
    data: { state: 'previous-versions' },
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
