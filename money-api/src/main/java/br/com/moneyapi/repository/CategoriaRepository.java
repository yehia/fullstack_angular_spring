package br.com.moneyapi.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.moneyapi.model.Categoria;

public interface CategoriaRepository extends JpaRepository<Categoria, Long> {

}
