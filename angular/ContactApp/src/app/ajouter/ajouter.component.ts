///<reference path="../../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Contact} from '../shared/models/contact';


@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.css']
})
export class AjouterComponent implements OnInit {

  @Output() unContactEstCree = new EventEmitter();
  nouveauContact: Contact = new Contact();
  active: boolean = true;
  constructor() { }
  ngOnInit() {
  }

  // -- Fonction qui sera appelée après le submit du formulaire
  submitContact() {
    /** Lorsque mon formulaire est soumis, j'emets un évenement qui sera écouté
     */
    this.unContactEstCree.emit({ leContact: this.nouveauContact });
    // -- Je réinitialise le nouveau contact
    this.nouveauContact = new Contact();
    /** Je passe ensuite mon formulaire à false puis à true, ce qui a pour conséquence de le détruire dans le DOM puis le recréer  */
    this.active = false;
    setTimeout(() => this.active = true, 0);
  }
}
