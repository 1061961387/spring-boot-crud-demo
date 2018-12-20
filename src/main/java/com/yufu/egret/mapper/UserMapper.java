package com.yufu.egret.mapper;

import com.yufu.egret.domain.User;
import org.apache.ibatis.annotations.Insert;
import tk.mybatis.mapper.common.Mapper;

public interface UserMapper extends Mapper<User> {
    @Insert("insert into user(mobileNum) values(#{mobile})")
    int addUser(User user);
}
