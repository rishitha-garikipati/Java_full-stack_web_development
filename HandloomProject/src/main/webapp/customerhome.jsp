<%-- <%@page import="com.klef.jfsd.springboot.model.Customer"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>


<%
Customer c = (Customer)session.getAttribute("customer");
if(c==null)
{
	response.sendRedirect("customersessionfail");
	return;
}
%>  

<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" type="text/css" href="styles.css"/>

<meta charset="UTF-8">
<title>Customer Home</title>
</head>
<body>
<%@include file="customernavbar.jsp" %>
Welcome <%=c.getName()%>

</body>
</html> --%>