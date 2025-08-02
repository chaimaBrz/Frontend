import { Component, OnInit } from '@angular/core';
import { EquipementService } from '../../services/equipement.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  equipments: any[] = [];

  constructor(private equipmentService: EquipementService) {}

  ngOnInit(): void {
  console.log("🚀 Initialisation - user:", localStorage.getItem('user'));
  this.loadEquipments();
}

  loadEquipments(): void {
    this.equipmentService.getAll().subscribe({
      next: (data) => {
        console.log('Équipements chargés :', data); // ✅ debug ici
        this.equipments = data;
      },
      error: (err) => {
        console.error('Erreur de chargement équipements :', err); // ❌ voir les erreurs ici
      }
    });
  }

  openModal(equipement: any): void {
    console.log("Historique demandé pour :", equipement);
    // futur modal ici
  }
}
