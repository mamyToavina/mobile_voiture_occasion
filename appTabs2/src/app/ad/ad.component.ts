import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Importez FormBuilder, FormGroup et Validators
import { AppConstant } from '../AppConstant';
import { AdService } from './ad.service';

@Component({
  selector: 'app-ad',
  templateUrl: './ad.component.html',
  styleUrls: ['./ad.component.css']
})
export class AdComponent implements OnInit {
  creationAdForm: FormGroup;
  categories: any;
  brands: any;

  adData = {
    userId: AppConstant.userId,
    modeleId: '',
    marqueId: '',
    prix: 0,
    kilometrage: 0,
    annee: 0,
    description: '',
    images: [] as File[],
  };

  constructor(private http: HttpClient, private formBuilder: FormBuilder, private adService: AdService) {
    this.creationAdForm = this.formBuilder.group({
      modeleId: ['', Validators.required],
      marqueId: ['', Validators.required],
      prix: ['', Validators.required],
      kilometrage: ['', Validators.required],
      annee: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.loadCategories();
    this.loadBrands();
    this.creationAdForm = this.formBuilder.group({
      modeleId: ['', Validators.required],
      marqueId: ['', Validators.required],
      prix: ['', Validators.required],
      kilometrage: ['', Validators.required],
      annee: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  onChange(event: any) {
    this.adData.images = event.target.files;
  }

  onSubmit() {
    if (this.creationAdForm.valid) { 
      const formData = new FormData();
      if (this.adData.userId !== null) {
        formData.append('userId', this.adData.userId);
      }
      formData.append('modeleId', this.creationAdForm.value.modeleId);
      formData.append('marqueId', this.creationAdForm.value.marqueId);
      formData.append('prix', this.creationAdForm.value.prix);
      formData.append('kilometrage', this.creationAdForm.value.kilometrage);
      formData.append('annee', this.creationAdForm.value.annee);
      formData.append('description', this.creationAdForm.value.description);
      
      for (let i = 0; i < this.adData.images.length; i++) {
        formData.append('images', this.adData.images[i]);
      }

      this.adService.createAd(formData).subscribe({
        next: data => {
          console.log('Annonce ajoutée avec succès:', data);
        },
        error: err => {
          console.error('Erreur lors de l\'insertion:', err);
          console.log("ito n erreur: "+err);
        }
      });
    } else {
      console.error('Formulaire invalide');
    }
  }

  loadCategories() {
    this.adService.findAllCategory().subscribe(
      categories => {
        this.categories = categories;
      },
      error => {
        console.log('Error fetching categories:', error);
      }
    );
  }

  loadBrands() {
    this.adService.findAllBrands().subscribe(
      brands => {
        this.brands = brands;
      },
      error => {
        console.log('Error fetching brands:', error);
      }
    );
  }
}
