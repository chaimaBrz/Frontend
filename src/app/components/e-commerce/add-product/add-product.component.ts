import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EquipementService } from '../../../services/equipement.service';
import { BreadcrumbComponent } from '../../../shared/components/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-add-product',
  standalone: true,
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
  imports: [CommonModule, ReactiveFormsModule, BreadcrumbComponent]
})
export class AddProductComponent {
  equipementForm: FormGroup;

  constructor(private fb: FormBuilder, private equipementService: EquipementService) {
    this.equipementForm = this.fb.group({
      nom: ['', Validators.required],
      etat: ['', Validators.required],
      date_installation: ['', Validators.required],
      type_id: ['', Validators.required],
      fournisseur_id: ['']
    });
  }

  onSubmit() {
    if (this.equipementForm.valid) {
      this.equipementService.createEquipement(this.equipementForm.value).subscribe({
        next: (response) => {
          console.log('Équipement ajouté avec succès', response);
          alert('Équipement ajouté avec succès !');
          this.equipementForm.reset();
        },
        error: (err) => {
          console.error('Erreur lors de l\'ajout de l\'équipement', err);
          alert('Erreur lors de l\'ajout de l\'équipement');
        }
      });
    } else {
      console.warn('Formulaire invalide');
      alert('Veuillez remplir tous les champs obligatoires.');
    }
  }
}
