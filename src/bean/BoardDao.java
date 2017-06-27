package bean;

import org.apache.ibatis.session.SqlSession;

import myba.BoardFactory;

public class BoardDao {
	SqlSession session;
	
	public BoardDao(BoardFactory f){
		this.session=f.getFactory().openSession();
	}
	
	@SuppressWarnings("finally")
	public String input(BoardVo vo){
		String msg = "";
		try {
			int r = session.insert("board.brd_insert", vo);
			if(r>0) msg="정상적으로 저장";
			else    msg="저장중 오류 발생";
		} catch (Exception e) {
			msg="시스템 오류";
			session.rollback();
			e.printStackTrace();
		}finally {
			session.commit();
			return msg;
			
		}
	}
}
