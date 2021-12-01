package com.example.cartservice.jpa;

import com.example.cartservice.entity.CartEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.transaction.annotation.Transactional;

public interface CartRepository extends CrudRepository<CartEntity, Long>{
    Iterable<CartEntity> findByUserId(String userId);

    @Transactional
    void deleteByUserId(String userId);

    //CartEntity findByCartId(String userId);

    //CartEntity findByuserId(String userId);
    //Iterable<CartEntity> findByUserId(String userId);
}

