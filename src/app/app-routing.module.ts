import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './pages/dashboard/dashboard.component'; // ✅ chemin corrigé
import { EquipementsComponent } from './pages/equipements/equipements.component';
import { TicketsComponent } from './tickets/tickets.component';
import { LogsComponent } from './logs/logs.component';
import { LoginComponent } from './login/login.component'; // ✅ ajouté

import { AuthGuard } from './auth.guard';


const routes: Routes = [
  // 🟪 Page de connexion
  
  { path: 'auth/login', component: LoginComponent },

  // 🔐 Pages protégées
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'equipements', component: EquipementsComponent, canActivate: [AuthGuard] },
  { path: 'tickets', component: TicketsComponent, canActivate: [AuthGuard] },
  { path: 'logs', component: LogsComponent, canActivate: [AuthGuard] },
  

  // ⛔ Redirection par défaut vers login
  { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/auth/login' }, // pour tout chemin invalide
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
