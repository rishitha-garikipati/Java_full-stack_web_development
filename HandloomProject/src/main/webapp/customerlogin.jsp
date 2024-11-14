<html>
<head>
<link rel="stylesheet" type="text/css" href="styles.css"/>

    <title>Customer Login</title>
</head>
<body>
  <%@include file="customernavbar.jsp" %>
 
    <h3 style="text-align: center;">Customer Login</h3>
    <div class="form-container">
        <form method="post" action="checkcustomerlogin">
            <table>
                <tr>
                    <td><label for="cemail">Enter Email ID</label></td>
                    <td><input type="email" id="cemail" name="cemail" required/></td>
                </tr>
                 <tr>
                    <td><label for="cpwd">Enter Password</label></td>
                    <td><input type="password" id="cpwd" name="cpwd" required/></td>
                </tr>
                <tr>
                <tr>
                    <td colspan="2" class="button-container">
                        <input type="submit" value="Login"/>
                        <input type="reset" value="Clear"/>
                    </td>
                </tr>
            </table>
        </form>
    </div>
</body>
</html>