import { Component, OnInit } from '@angular/core';
import { UserAdsVenduService } from './userAdsVendu.service';
import { AppConstant } from '../AppConstant';

@Component({
  selector: 'app-userAdsVendu',
  templateUrl: './userAdsVendu.component.html',
  styleUrls: ['./userAdsVendu.component.css']
})
export class UserAdsVenduComponent implements OnInit {

  userId: any = AppConstant.userId;
  status = 3;
  page = 1;
  ads: any[] = [];
  totalPages = 0;
  totalPagesArray: number[] = [];

  constructor(private adService: UserAdsVenduService) { }

  ngOnInit(): void {
    this.getAdsByUserIdAndStatus();
  }

  getAdsByUserIdAndStatus() {
    this.adService.getAdsByUserIdAndStatus(this.userId, this.status, this.page).subscribe(
      (response: any) => {
        this.ads = response.content;
        this.totalPages = response.totalPages;
        this.totalPagesArray = Array.from({length: this.totalPages}, (_, i) => i + 1);
        console.log(response);
      },
      (error: any) => {
        console.error('Erreur lors de la récupération des annonces:', error);
        console.log(error);
      }
    );
  }

  onPageChange(pageNumber: number) {
    this.page = pageNumber;
    this.getAdsByUserIdAndStatus();
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0'); // Ajoute un zéro devant si nécessaire
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Les mois commencent à 0, donc on ajoute 1
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  }

  markAsSold(adId: number) {
    this.adService.markAdAsSold(adId).subscribe(
      () => {
        // Mettre à jour la liste des annonces après le marquage comme vendu
        this.getAdsByUserIdAndStatus();
        alert("le voiture est vendu maintenant");
      },
      (error: any) => {
        console.error('Erreur lors du marquage de l\'annonce comme vendue:', error);
      }
    );
  }

}
