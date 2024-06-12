package com.ssun.ShopPortfolio.buy.vo;

import com.ssun.ShopPortfolio.item.vo.ReItemVO;
import lombok.Data;

@Data
public class ReBuyDetailVO {
    private int buyDetailCode;
    private int itemCode;
    private int buyCnt;
    private int totalPrice;
    private int buyCode;
    // selectBuyList 상세정보:아이템 >> 1:1 관계
    private ReItemVO reItemVO;
}
