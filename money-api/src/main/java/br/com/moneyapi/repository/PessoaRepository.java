package br.com.moneyapi.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.moneyapi.model.Pessoa;

public interface PessoaRepository extends JpaRepository<Pessoa, Long> {

}
