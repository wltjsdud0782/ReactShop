package com.ssun.ShopPortfolio.member.service;


import com.ssun.ShopPortfolio.member.vo.ReMemberVO;

public interface ReMemberService {

    int idCheck(String memberId);

    void insertMember(ReMemberVO reMemberVO);

    int login(ReMemberVO reMemberVO);

    ReMemberVO sessionMember(ReMemberVO reMemberVO);
}
