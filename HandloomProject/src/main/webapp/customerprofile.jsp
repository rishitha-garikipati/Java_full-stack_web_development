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
<title>Customer Profile</title>
</head>
<body>
<%@include file="customernavbar.jsp" %>

<div class="container">
    <h2>Customer Information</h2>
    <div class="info">
        <label>ID:</label> <%=c.getId() %><br>
        <label>NAME:</label> <%=c.getName()%><br>
        <label>GENDER:</label> <%=c.getGender() %><br>
        <label>DATE OF BIRTH:</label> <%=c.getDateofbirth() %><br>
        <label>EMAIL:</label> <%=c.getEmail() %><br>
        <label>LOCATION:</label> <%=c.getLocation() %><br>
        <label>CONTACT:</label> <%=c.getContact() %><br>
    </div>
</div>
</body>
</html>
 --%>