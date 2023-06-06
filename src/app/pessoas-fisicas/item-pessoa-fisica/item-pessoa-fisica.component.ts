import { Component, Input, OnInit } from '@angular/core';
import { PessoaFisica } from '../pessoa-fisica.model';

@Component({
  selector: 'app-item-pessoa-fisica',
  templateUrl: './item-pessoa-fisica.component.html',
  styleUrls: ['./item-pessoa-fisica.component.scss'],
})
export class ItemPessoaFisicaComponent  implements OnInit {
  @Input() pessoaFisica!: PessoaFisica;
  constructor() { }

  ngOnInit() {}

}
