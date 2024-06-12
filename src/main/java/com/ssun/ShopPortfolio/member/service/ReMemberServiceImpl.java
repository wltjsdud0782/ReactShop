package com.ssun.ShopPortfolio.member.service;

import com.ssun.ShopPortfolio.member.vo.ReMemberVO;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("reMemberService")
public class ReMemberServiceImpl implements ReMemberService{
    @Autowired
    private SqlSessionTemplate sqlSession;

    @Override
    public int idCheck(String memberId) {
        return sqlSession.selectOne("memberMapper.idCheck", memberId);
    }

    @Override
    public void insertMember(ReMemberVO reMemberVO) {
        sqlSession.insert("memberMapper.insertMember", reMemberVO);
    }

    @Override
    public int login(ReMemberVO reMemberVO) {
        return sqlSession.selectOne("memberMapper.login", reMemberVO);
    }

    @Override
    public ReMemberVO sessionMember(ReMemberVO reMemberVO) {
        return sqlSession.selectOne("memberMapper.sessionMember", reMemberVO);
    }
}
