package com.ssun.ShopPortfolio.cart.vo;

import lombok.Data;

import java.util.List;

@Data
public class ReCartVO {
    private int cartCode;
    private int itemCode;
    private String memberId;
    private int cartCnt;
    private String cartDate;

    private List<Integer> cartCodeList;
}
