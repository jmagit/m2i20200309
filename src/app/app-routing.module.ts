import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DemosComponent } from './demos/demos.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { PersonasListComponent, PersonasAddComponent, PersonasEditComponent, PersonasViewComponent } from './personas';
import { AuthGuard } from './security';
import { PageNotFoundComponent } from './main/page-not-found/page-not-found.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent},
  { path: 'inicio', component: HomeComponent},
  { path: 'demos', component: DemosComponent},
  { path: 'chisme/de/hacer/numeros', component: CalculadoraComponent},
  { path: 'personas', component: PersonasListComponent},
  { path: 'personas/add', component: PersonasAddComponent, canActivate: [AuthGuard]},
  { path: 'personas/:id/edit', component: PersonasEditComponent},
  { path: 'personas/:id', component: PersonasViewComponent},
  { path: 'personas/:id/:kk', component: PersonasViewComponent},
  { path: 'pepito/grillo', redirectTo: '/personas/2'},
  { path: 'person', children: [
    { path: '', component: PersonasListComponent},
    { path: 'add', component: PersonasAddComponent, canActivate: [AuthGuard]},
    { path: ':id/edit', component: PersonasEditComponent},
    { path: ':id', component: PersonasViewComponent},
    { path: ':id/:kk', component: PersonasViewComponent},
    ]},
  { path: 'config', loadChildren: () => import('./config/config.module').then(mod => mod.ConfigModule)},
  { path: '404.html', component: PageNotFoundComponent},
  { path: '**', component: PageNotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
