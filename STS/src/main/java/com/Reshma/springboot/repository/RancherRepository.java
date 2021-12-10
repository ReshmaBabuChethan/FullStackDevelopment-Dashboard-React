package com.Reshma.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.Reshma.springboot.model.Rancher;


@Repository
public interface RancherRepository extends JpaRepository<Rancher, Long>{

}

