package com.ssun.ShopPortfolio.buy.vo;

import lombok.Data;

import java.util.List;

@Data
public class ReShopBuyVO {
    private int buyCode;
    private String memberId;
    private int buyPrice;
    private String buyDate;
    // insert 쿼리에 의한 추가 변수
    // 구매정보:구입상세정보 >> 1:n 관계
    private List<ReBuyDetailVO> reBuyDetailList;
//    private BuyDetailVO buyOne;
}
