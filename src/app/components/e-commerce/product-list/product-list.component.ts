import { AsyncPipe, CommonModule, DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbPagination } from '@ng-bootstrap/ng-bootstrap';
import { BreadcrumbComponent } from '../../../shared/components/breadcrumb/breadcrumb.component';
import { ProductListService } from '../../../shared/services/product/product-list.service';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  imports: [BreadcrumbComponent, FormsModule, CommonModule, NgbPagination, AsyncPipe],
  providers: [DecimalPipe, ProductListService]
})
export class ProductListComponent {
  list: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.getAllPosts();
  }

  getAllPosts() {
    this.apiService.getEquipements().subscribe(data => {
      this.list = data;
    });
  }

  toggleHistorique(item: any) {
    if (item.showHistorique) {
      item.showHistorique = false;
      return;
    }

    if (item.evenements) {
      item.showHistorique = true;
      return;
    }

    this.apiService.getEvenementsByEquipementId(item.id).subscribe((data: any) => {
  item.evenements = data.evenements;
  item.showHistorique = true;
});

  }
  refreshEquipementHistorique(equipementId: number) {
  const equipement = this.list.find(e => e.id === equipementId);
  if (equipement) {
    this.apiService.getEvenementsByEquipementId(equipementId).subscribe((data: any) => {
      equipement.evenements = data.evenements;
      equipement.showHistorique = true; // On le garde ouvert
    });
  }
}

}
