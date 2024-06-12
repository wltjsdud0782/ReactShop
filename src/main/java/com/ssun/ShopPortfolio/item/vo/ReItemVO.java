package com.ssun.ShopPortfolio.item.vo;

import lombok.Data;

import java.util.List;

@Data
public class ReItemVO {
    private int itemCode;
    private String itemName;
    private int itemPrice;
    private int itemStock;
    private String itemIntro;
    private String regDate;
    private int cateCode;
    private int itemStatus;
    private String statusName;
    // 아이템:아이템이미지 >> 1:n 관계
    private List<ReImgVO> reImgList;
    // 아이템:카테고리 >> 1:1 관계
    private ReCategoryVO reCategoryVO;
}
