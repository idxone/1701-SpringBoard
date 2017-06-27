<%@ page language="java" contentType="text/html; charset=UTF-8"
   pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>list</title>


</head>
<body>
   <h2>Spring 게시판</h2>
   <form name='frm_board' method='post'>
      <input type='button' id='btnInput' value='입력' />
      <input type='button' id='btnView' value='상세보기' />
      <div id='find'>
         <input type='text' id ='findStr' value=""> 
         <input type='submit' id ='btnFind' value='검색'>
      </div>
   </form>
   <hr />
   <div id='items'>
      <span class='serial'>순번</span> 
      <span class='mdate'>작성일</span> 
      <span class='worker'>작성자</span> 
      <span class='subject'>제목</span> 
      <span class='hit'>조회수</span>
   </div>


</body>
</html>