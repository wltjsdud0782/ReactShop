package com.ssun.ShopPortfolio.member.controller;

import com.ssun.ShopPortfolio.member.service.ReMemberServiceImpl;
import com.ssun.ShopPortfolio.member.vo.ReMemberVO;
import jakarta.annotation.Resource;
import jakarta.servlet.http.HttpSession;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;

@RestController
@RequestMapping("/member")
public class ReMemberController {
    @Resource(name = "reMemberService")
    private ReMemberServiceImpl ReMemberService;

    @GetMapping("/idCheck/{memberId}")
    public int idCheck(@PathVariable(name = "memberId") String memberId){
        System.out.println(memberId);
        return ReMemberService.idCheck(memberId);
    }

    @PostMapping("/insertMember")
    public void insertMember(@RequestBody ReMemberVO reMemberVO){
        //reMemberVO.setMemberTelFormArr();

        reMemberVO.setMemberTel(Arrays.toString(reMemberVO.getMemberTels()).replace(", ", "-").substring(1,14));
        reMemberVO.setMemberEmail(Arrays.toString(reMemberVO.getMemberEmails()).replace(", ","@").substring(1,Arrays.toString(reMemberVO.getMemberEmails()).replace(", ","@").length()-1));
        ReMemberService.insertMember(reMemberVO);
    }

    @PostMapping("/login")
    public int login(@RequestBody ReMemberVO reMemberVO, HttpSession session){
        if (ReMemberService.login(reMemberVO) == 1){
            ReMemberVO loginInfo = ReMemberService.sessionMember(reMemberVO);

            if (loginInfo != null){
                session.setAttribute("loginInfo", loginInfo);
            }
        }

        return ReMemberService.login(reMemberVO);
    }

    @GetMapping("/sessionMember")
    public Object sessionMember(HttpSession session){
        return session.getAttribute("loginInfo");
    }

    @GetMapping("/logout")
    public void logout(HttpSession session){
        session.removeAttribute("loginInfo");
    }


}
