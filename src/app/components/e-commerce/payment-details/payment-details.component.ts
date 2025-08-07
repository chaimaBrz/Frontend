import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TicketService } from '../../../services/ticket.service'; // à adapter selon le path
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule]
})

export class PaymentDetailsComponent implements OnInit {
  ticketForm: FormGroup;

  constructor(private fb: FormBuilder, private ticketService: TicketService) {
    this.ticketForm = this.fb.group({
      titre: ['', Validators.required],
      description: ['', Validators.required],
      statut: ['', Validators.required],
      userCreateurId: ['', Validators.required],
      userAssigneId: [''],
      equipementId: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.ticketForm.valid) {
      this.ticketService.createTicket(this.ticketForm.value).subscribe({
        next: (response) => {
          console.log('Ticket ajouté avec succès', response);
          alert('Ticket ajouté avec succès !');
          this.ticketForm.reset();
        },
        error: (err) => {
          console.error('Erreur lors de l\'ajout du ticket', err);
          alert('Erreur lors de l\'ajout du ticket');
        }
      });
    } else {
      alert('Veuillez remplir tous les champs obligatoires.');
    }
  }
}
