package com.team4.dayoff.controller;

import java.util.ArrayList;
import java.util.List;

import com.team4.dayoff.entity.Cart;
import com.team4.dayoff.entity.CartView;
import com.team4.dayoff.repository.CartRepository;
import com.team4.dayoff.repository.CartViewRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CartController{

    @Autowired
     CartRepository cartRepository;
     @Autowired
     CartViewRepository cartViewRepository;

    @GetMapping("/cartList")
    public List<CartView> cartList(@RequestParam("userId") Integer userId )
      {
        System.out.println(userId);
        List<CartView> ct= new ArrayList<CartView>();
        // cartRepository.findAll().forEach(i -> {
        //     ct.add(i);
        // });
        ct= cartViewRepository.findByUserId(userId);
        System.out.println(ct);
        return ct;
    }
  @GetMapping("/cartView")
  public CartView cartView(@RequestParam("userId") Integer userId ){
      CartView ctv = cartViewRepository.findById(userId).get();
      System.out.println(ctv);
      return ctv;
  }

  @PostMapping("/addToCart")
  public Cart addToCart(@RequestBody Cart cart){
    System.out.println(cart);
      cartRepository.save(cart);

      return cart;
  }
}