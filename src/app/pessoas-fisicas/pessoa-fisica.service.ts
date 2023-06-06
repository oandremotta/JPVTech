import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PessoaFisica } from './pessoa-fisica.model';
import { BehaviorSubject, map, take, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PessoaFisicaService {
  private url = `${environment.urlBase}`;
  private pessoasFisicas = new BehaviorSubject<PessoaFisica[]>([]);

  constructor(private httpClient: HttpClient) {
    this.fetchPlaces().subscribe(); // Chama a função fetchPlaces() no momento da criação do serviço
  }

  get getAllPessoasFisicas() {
    return this.pessoasFisicas.asObservable();
  }

  fetchPlaces() {
    return this.httpClient
      .get<{ data: PessoaFisica[] }>(`${this.url}pessoa-fisica`)
      .pipe(
        tap((resData) => {
          const pessoasFisicas = resData.data;
          this.pessoasFisicas.next(pessoasFisicas); // Atualiza o BehaviorSubject com os dados recebidos
        }),
        map((resData) => resData.data) // Retorna apenas os dados (array de pessoas fisicas) para o próximo operador
      );
  }

  getPessoaFisica(id: number) {
    return this.pessoasFisicas.pipe(
      take(1),
      map((pessoasFisicas) => {
        return pessoasFisicas.find((pessoa) => pessoa.id === id);
      })
    );
  }

  adicionarPessoaFisica(pessoa: PessoaFisica) {
    return this.httpClient.post<PessoaFisica>(`${this.url}pessoa-fisica`, pessoa).pipe(
      tap((novaPessoa) => {
        const pessoasFisicas = this.pessoasFisicas.value;
        pessoasFisicas.push(novaPessoa);
        this.pessoasFisicas.next(pessoasFisicas); // Atualiza o BehaviorSubject após a adição
      })
    );
  }

  editarPessoaFisica(pessoa: PessoaFisica) {
    return this.httpClient.put<PessoaFisica>(`${this.url}pessoa-fisica/${pessoa.id}`, pessoa).pipe(
      tap(() => {
        const pessoasFisicas = this.pessoasFisicas.value;
        const index = pessoasFisicas.findIndex((p) => p.id === pessoa.id);
        if (index !== -1) {
          pessoasFisicas[index] = pessoa;
          this.pessoasFisicas.next(pessoasFisicas); // Atualiza o BehaviorSubject após a edição
        }
      })
    );
  }


  deletarPessoaFisica(id: number) {
    return this.httpClient.delete(`${this.url}pessoa-fisica/${id}`).pipe(
      tap(() => {
        const pessoasFisicas = this.pessoasFisicas.value;
        const index = pessoasFisicas.findIndex((pessoa) => pessoa.id === id);
        if (index !== -1) {
          pessoasFisicas.splice(index, 1);
          this.pessoasFisicas.next(pessoasFisicas); // Atualiza o BehaviorSubject após a exclusão
        }
      })
    );
  }

}
