<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<script type="text/javascript" src='./js/file_upload.js'></script>
</head>
<body>
<h2>QnA 질문하기</h2>
<form name='frm_board' method="post" enctype="multipart/form-data">
	<label>작성자</label>
	<input type="text" name="worker"><br/>
	<label>제목</label>
	<input type="text" name="subject" size='60' value='subject...'><br/>
	<textarea rows="15" cols="68" name='content'>하이룽~</textarea><br/><br/>
	<div id='fileatt'></div>
	<p/>
	<input type="button" value='목록으로' id='btnList'>
	<input type="button" value='질문작성' id='btnInputR'>
</form>
<script type="text/javascript">attFileAppend()</script>
</body>
</html>