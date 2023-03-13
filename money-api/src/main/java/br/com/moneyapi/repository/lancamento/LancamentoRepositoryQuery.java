package br.com.moneyapi.repository.lancamento;

import java.util.List;

import br.com.moneyapi.model.Lancamento;
import br.com.moneyapi.repository.filter.LancamentoFilter;

public interface LancamentoRepositoryQuery {

	public List<Lancamento> filtrar(LancamentoFilter lancamentoFilter);
}
