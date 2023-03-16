import { Component } from '@angular/core';

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css']
})
export class LancamentosPesquisaComponent {
  lancamentos = [
    { tipo: 'DESPESA', descricao: 'Compra de Pão', dataVencimento: new Date(2022, 6, 30), dataPagamento: new Date(2022, 7, 1), valor: 4.55, pessoa: 'Padaria do José' },
    { tipo: 'RECEITA', descricao: 'Venda de Software', dataVencimento: new Date(2022, 5, 30), dataPagamento: null, valor: 40000.55, pessoa: 'Atacado Brasil' },
    { tipo: 'DESPESA', descricao: 'Impostos', dataVencimento: new Date(2022, 6, 1), dataPagamento: null, valor: 45500, pessoa: 'Ministério da Fazenda' },
    { tipo: 'DESPESA', descricao: 'Mensalidade de Escola', dataVencimento: new Date(2022, 8, 30), dataPagamento: new Date(2022, 9, 1), valor: 850, pessoa: 'Escola Abelha Rainha' },
    { tipo: 'RECEITA', descricao: 'Venda de Carro', dataVencimento: new Date(2023, 4, 10), dataPagamento: null, valor: 40444.55, pessoa: 'José da Silva' },
    { tipo: 'DESPESA', descricao: 'Aluguel', dataVencimento: new Date(2022, 2, 10), dataPagamento: null, valor: 1750 , pessoa: 'Casa Nova Imóveis' },
    { tipo: 'DESPESA', descricao: 'Mensalidade Academia', dataVencimento: new Date(2023, 1, 30), dataPagamento: new Date(2023, 2, 3), valor: 180, pessoa: 'Academia do Gordão' },
  ];
}
