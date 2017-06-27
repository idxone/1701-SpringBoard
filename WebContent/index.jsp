<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta name="viewport" content="width=device-width, user-scalable=yes">
<title>Insert title here</title>
<link rel="stylesheet" type='text/css' href="./css/board-mobile.css"
   media='screen and (max-width:900px)'/>
   
<link rel="stylesheet" type='text/css' href="./css/board-pc.css"
   media='screen and (min-width:900px)'/>
<script src='./js/board.js'></script>
</head>
<body>
<%
String inc = "list.do";
if(request.getParameter("inc") !=null){//나중에 $inc로 바꿔야함
	inc= request.getParameter("inc");
}
%>
<div id="main">
	<div id='top'>
		<%@include file="top.jsp" %>
	</div>
	
	<div id='center'>
		<jsp:include page="<%=inc%>" />
		
	</div>
	
	<div id='bottom'>
		<%@include file="bottom.jsp" %>
	</div>
</div>
<script type="text/javascript">init()</script>
</body>
</html>