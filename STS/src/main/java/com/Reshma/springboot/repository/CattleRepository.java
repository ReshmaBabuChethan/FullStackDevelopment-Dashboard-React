
package com.Reshma.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.Reshma.springboot.model.Cattle;


@Repository
public interface CattleRepository extends JpaRepository<Cattle, Long>{

}

