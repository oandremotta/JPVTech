import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PessoaFisica } from '../pessoa-fisica.model';
import { PessoaFisicaService } from '../pessoa-fisica.service';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-form-pessoa-fisica',
  templateUrl: './form-pessoa-fisica.page.html',
  styleUrls: ['./form-pessoa-fisica.page.scss'],
})
export class FormPessoaFisicaPage implements OnInit {
  pessoaFisica?: PessoaFisica;
  form!: FormGroup;

  constructor(
    private navController: NavController,
    private route: ActivatedRoute,
    private pessoaFisicaService: PessoaFisicaService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap) => {
      const idParam = paramMap.get('id');
      if (!idParam) {
        this.form = new FormGroup({
          nomeCompleto: new FormControl('', Validators.required),
          dataNascimento: new FormControl('', Validators.required),
          valorRenda: new FormControl('', Validators.required),
          cpf: new FormControl('', Validators.required),
        });
      } else {
        const id = parseInt(idParam, 10);
        this.pessoaFisicaService.getPessoaFisica(id).subscribe((pessoa) => {
          this.pessoaFisica = pessoa;
          this.form = new FormGroup({
            nomeCompleto: new FormControl(pessoa!.nomeCompleto, Validators.required),
            dataNascimento: new FormControl(pessoa!.dataDeNascimento, Validators.required),
            valorRenda: new FormControl(pessoa!.valorDaRenda, Validators.required),
            cpf: new FormControl(pessoa!.cpf, Validators.required),
          });
        });
      }
    });
  }

  onFormSubmit() {
    if (this.form.valid) {
      const dataNascimento = this.form.get('dataNascimento')?.value;
      const [dia, mes, ano] = dataNascimento.split('/');

      const dataFormatada = new Date(Number(ano), Number(mes) - 1, Number(dia));

      const pessoa: PessoaFisica = {
        id: this.pessoaFisica?.id,
        nomeCompleto: this.form.get('nomeCompleto')?.value,
        dataDeNascimento: dataFormatada,
        valorDaRenda: this.form.get('valorRenda')?.value,
        cpf: this.form.get('cpf')?.value,
      };

      if (this.pessoaFisica?.id != null) {
        this.pessoaFisicaService.editarPessoaFisica(pessoa).subscribe(
          (pessoaEditada) => {
            console.log('Pessoa física editada:', pessoaEditada);
            this.navController.navigateBack('/');
          },
          (error) => {
            console.error('Erro ao editar pessoa física:', error);
          }
        );
      } else {
        this.pessoaFisicaService.adicionarPessoaFisica(pessoa).subscribe(
          (novaPessoa) => {
            console.log('Pessoa física adicionada:', novaPessoa);
            this.navController.navigateBack('/');
          },
          (error) => {
            console.error('Erro ao adicionar pessoa física:', error);
          }
        );
      }
    } else {
      console.log('Formulário inválido!');
    }
  }
}
