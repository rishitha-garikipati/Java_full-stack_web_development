<%-- <%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<%@ taglib uri="jakarta.tags.core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>View All Customers</title>
<link rel="stylesheet" type="text/css" href="styles.css"/>
  
</head>
<body>
  <%@include file="adminnavbar.jsp" %>

    <h3 style="text-align: center;"><u>View All Employees</u></h3>
    <table>
        <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>GENDER</th>
            <th>DATE OF BIRTH</th>
            <th>EMAIL</th>
            <th>LOCATION</th>
            <th>CONTACT</th>
        </tr>
        <c:forEach items="${customerlist}" var="customer">
            <tr>
                <td><c:out value="${customer.id}"/></td>
                <td><c:out value="${customer.name}"/></td>
                <td><c:out value="${customer.gender}"/></td>
                <td><c:out value="${customer.dateofbirth}"/></td>
                <td><c:out value="${customer.email}"/></td>
                <td><c:out value="${customer.location}"/></td>
                <td><c:out value="${customer.contact}"/></td>
            </tr>
        </c:forEach>
    </table>
</body>
</html>
 --%>