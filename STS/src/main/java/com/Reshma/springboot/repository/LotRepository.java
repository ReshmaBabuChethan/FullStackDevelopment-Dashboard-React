
package com.Reshma.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.Reshma.springboot.model.Lot;


@Repository
public interface LotRepository extends JpaRepository<Lot, Long>{

}