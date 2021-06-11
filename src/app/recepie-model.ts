export interface RecepieModel {
  recepietitle?: string;
  picture?: 'images/jpeg';
  nutritionpicture?: string;
  categorie?: string;
  diet?: string;
  ingredients?: [
    ingredient?: string
  ];
  preparation?: string;
  nutrition?: string;
  time?: string;
  difficulty?: string;
  favorit?: boolean;
}
