import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { PessoaFisicaService } from '../pessoa-fisica.service';
import { PessoaFisica } from '../pessoa-fisica.model';

@Component({
  selector: 'app-detalhe-pessoa-fisica',
  templateUrl: './detalhe-pessoa-fisica.page.html',
  styleUrls: ['./detalhe-pessoa-fisica.page.scss'],
})
export class DetalhePessoaFisicaPage implements OnInit {
  pessoaFisica: PessoaFisica | undefined;
  userId: number | undefined;

  constructor(
    private pessoaFisicaService: PessoaFisicaService,
    private navController: NavController,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap) => {
      if (!paramMap.has('id')) {
        this.navController.navigateBack('/');
        return;
      }
      this.userId = parseInt(paramMap.get('id')!, 10);
      this.getPessoaFisica(this.userId);
    });
  }

  getPessoaFisica(id: number) {
    this.pessoaFisicaService.getPessoaFisica(id).subscribe((pessoa) => {
      this.pessoaFisica = pessoa;
    });
  }

  excluirPessoa() {
    this.pessoaFisicaService.deletarPessoaFisica(this.userId!).subscribe(() => {
      this.navController.navigateBack('/');
    });
  }
}
