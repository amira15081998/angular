import { Injectable } from '@angular/core';
import { GLOBAL } from 'src/app/app-config';
import { Outils } from 'src/models/outil';

@Injectable({
  providedIn: 'root'
})
export class OutilsService {
  tab:Outils[]=GLOBAL.db.outils;
  constructor() { }
}
