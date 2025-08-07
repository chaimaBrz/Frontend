import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { TicketService } from '../../../services/ticket.service';
import { AlertService } from '../../../services/alert.service';
import { FormsModule } from '@angular/forms';
import { NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.scss'],
  standalone: true,
  imports: [FormsModule, NgIf, NgFor]  // <-- Important : FormsModule pour ngModel, NgIf/NgFor pour directives
})
export class OrderHistoryComponent implements OnInit {
  equipements: any[] = [];
  newAlert: { [key: number]: string } = {};

  constructor(
    private apiService: ApiService,
    private ticketService: TicketService,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {
    this.fetchEquipements();
  }

  fetchEquipements() {
    this.apiService.getEquipements().subscribe(data => {
      this.equipements = data;
      this.equipements.forEach(equipement => {
        this.apiService.getTicketsByEquipementId(equipement.id).subscribe(tickets => {
          equipement.tickets = tickets;
        });
      });
    });
  }

  updateEquipement(equipement: any) {
    this.apiService.updateEquipement(equipement.id, { nom: equipement.nom }).subscribe(() => {
      alert('Équipement mis à jour avec succès');
    });
  }

  updateTicket(ticket: any) {
    this.ticketService.updateTicket(ticket.id, { titre: ticket.titre }).subscribe(() => {
      alert('Ticket mis à jour avec succès');
    });
  }

  deleteTicket(ticketId: number) {
    this.ticketService.deleteTicket(ticketId).subscribe(() => {
      this.fetchEquipements();
    });
  }

  addAlert(equipementId: number) {
    const description = this.newAlert[equipementId];
    if (description) {
      this.alertService.addAlertToEquipement(equipementId, { description }).subscribe(() => {
        alert('Alerte ajoutée');
        this.newAlert[equipementId] = '';
      });
    }
  }
}
