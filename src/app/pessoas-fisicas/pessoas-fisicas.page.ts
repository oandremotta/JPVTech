import { Component, OnInit } from '@angular/core';
import { PessoaFisica } from './pessoa-fisica.model';
import { PessoaFisicaService } from './pessoa-fisica.service';

@Component({
  selector: 'app-pessoas-fisicas',
  templateUrl: './pessoas-fisicas.page.html',
  styleUrls: ['./pessoas-fisicas.page.scss'],
})
export class PessoasFisicasPage implements OnInit {

  public pessoasFisicas?: PessoaFisica[];
  constructor(private pessoaFisicaService: PessoaFisicaService) { }

  ngOnInit() {
    this.pessoaFisicaService.getAllPessoasFisicas
      .subscribe((pessoasFisicas) => {
        this.pessoasFisicas = pessoasFisicas;
      });
  }
}
