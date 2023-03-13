package br.com.moneyapi.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.moneyapi.model.Lancamento;
import br.com.moneyapi.repository.lancamento.LancamentoRepositoryQuery;

public interface LancamentoRepository extends JpaRepository<Lancamento, Long>, LancamentoRepositoryQuery {

}
