package com.ssun.ShopPortfolio.member.vo;

import lombok.Data;

@Data
public class ReMemberVO {
    private String memberId;
    private String memberPw;
    private String memberName;
    private String gender;
    private String memberEmail;
    private String memberTel;
    private String memberAddr;
    private String addrDetail;
    private String postCode;
    private String joinDate;
    private String memberRoll;

    private String[] memberEmails;
    private String[] memberTels;

//    public void setMemberTelFormArr(){
//        String memberTel = "";
//        for(String e : memberTels){
//            memberTel += e + "-";
//        }
//
//        this.memberTel = memberTel.substring(0, memberTel.length() - 1);
//    }

}
