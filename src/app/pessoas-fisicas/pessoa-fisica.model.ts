export class PessoaFisica {
  constructor(
    public id?: number,
    public nomeCompleto?: string,
    public dataDeNascimento?: Date,
    public valorDaRenda?: number,
    public cpf?: string,
  ) {}
}
