import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PessoaFisica } from '../pessoa-fisica.model';
import { PessoaFisicaService } from '../pessoa-fisica.service';
import { NavController, ToastController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { CpfPipe } from 'src/app/shared/pipes/cpf.pipe';
import { CurrencyBrPipe } from 'src/app/shared/pipes/currency-br.pipe';
import { DateFormatPipe } from 'src/app/shared/pipes/date.pipe';

@Component({
  selector: 'app-form-pessoa-fisica',
  templateUrl: './form-pessoa-fisica.page.html',
  styleUrls: ['./form-pessoa-fisica.page.scss'],
})
export class FormPessoaFisicaPage implements OnInit {
  pessoaFisica?: PessoaFisica;
  form!: FormGroup;
  errorMessages: string[] = [];
  backendErrors: string[] = [];
  private currencyBrPipe!: CurrencyBrPipe;
  private cpfPipe!: CpfPipe;
  private datePipe!: DateFormatPipe;

  constructor(
    private navController: NavController,
    private route: ActivatedRoute,
    private pessoaFisicaService: PessoaFisicaService,
    private toastController: ToastController,
    cpfPipe: CpfPipe,
    currencyBrPipe: CurrencyBrPipe,
    datePipe: DateFormatPipe,
  ) {
    this.cpfPipe = cpfPipe;
    this.currencyBrPipe = currencyBrPipe;
    this.datePipe = datePipe;
  }

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
            nomeCompleto: new FormControl(
              pessoa!.nomeCompleto,
              Validators.required
            ),
            dataNascimento: new FormControl(
              this.datePipe.transform(pessoa!.dataDeNascimento!),
              Validators.required
            ),
            valorRenda: new FormControl(
              this.currencyBrPipe.transform(pessoa!.valorDaRenda),
              Validators.required
            ),
            cpf: new FormControl(
              this.cpfPipe.transform(pessoa!.cpf),
              Validators.required
            ),
          });
        });
      }
    });
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      cssClass: 'custom-toast',
      duration: 2000,
    });
    toast.present();
  }

  onFormSubmit() {
    console.log(this.form.get('dataNascimento')?.value);
    if (this.form.valid) {
      const dataNascimento = this.form.get('dataNascimento')?.value;
      const [dia, mes, ano] = dataNascimento
        .match(/(\d{2})\/(\d{2})\/(\d{4})/)
        ?.slice(1);

      const dataFormatada = new Date(Number(ano), Number(mes) - 1, Number(dia));
      const cpf = this.form.get('cpf')?.value;
      const cpfSemPontuacao = cpf?.replace(/[^\d]/g, '');
      const pessoa: PessoaFisica = {
        id: this.pessoaFisica?.id,
        nomeCompleto: this.form.get('nomeCompleto')?.value,
        dataDeNascimento: dataFormatada,
        valorDaRenda: parseFloat(
          this.form
            .get('valorRenda')
            ?.value?.replace(/[^\d,]/g, '')
            .replace(',', '.')
        ),
        cpf: cpfSemPontuacao,
      };
      console.log(pessoa.valorDaRenda);
      if (this.pessoaFisica?.id != null) {
        this.pessoaFisicaService.editarPessoaFisica(pessoa).subscribe(
          (pessoaEditada) => {
            console.log('Pessoa física editada:', pessoaEditada);
            this.presentToast('Pessoa física editada com sucesso!');
            this.navController.navigateBack('/');
          },
          (error) => {
            console.error('Erro ao editar pessoa física:', error);
            if (error && error.error && error.error.errors) {
              this.backendErrors = error.error.errors;
            } else {
              this.backendErrors = ['Erro desconhecido.'];
            }
          }
        );
      } else {
        this.pessoaFisicaService.adicionarPessoaFisica(pessoa).subscribe(
          (novaPessoa) => {
            console.log('Pessoa física adicionada:', novaPessoa);
            this.presentToast('Pessoa física adicionada com sucesso!');
            this.navController.navigateBack('/');
          },
          (error) => {
            console.error('Erro ao adicionar pessoa física:', error);
            if (error && error.error && error.error.errors) {
              this.backendErrors = error.error.errors;
            } else {
              this.backendErrors = ['Erro desconhecido.'];
            }
          }
        );
      }
    } else {
      console.log('Formulário inválido!');
    }
  }
}
