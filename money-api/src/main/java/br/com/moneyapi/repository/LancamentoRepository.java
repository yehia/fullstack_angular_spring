package br.com.moneyapi.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.moneyapi.model.Lancamento;

public interface LancamentoRepository extends JpaRepository<Lancamento, Long> {

}
