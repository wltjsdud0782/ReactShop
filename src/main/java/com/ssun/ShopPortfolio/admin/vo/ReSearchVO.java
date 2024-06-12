package com.ssun.ShopPortfolio.admin.vo;

import lombok.Data;

@Data
public class ReSearchVO {
    private String searchType;
    private String searchValue;

    private String fromDate;
    private String toDate;
}
