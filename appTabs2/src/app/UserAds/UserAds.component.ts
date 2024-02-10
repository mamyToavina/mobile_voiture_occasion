import { Component, OnInit } from '@angular/core';
import { AppConstant } from '../AppConstant';
import { UserAdsService } from './userAds.service';

@Component({
  selector: 'app-UserAds',
  templateUrl: './UserAds.component.html',
  styleUrls: ['./UserAds.component.css']
})
export class UserAdsComponent implements OnInit {

  userId = 1;
  status = 1;
  page = 1;
  ads: any[] = [];
  totalPages = 0;
  totalPagesArray: number[] = [];

  constructor(private adService: UserAdsService) { }

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
  

}
