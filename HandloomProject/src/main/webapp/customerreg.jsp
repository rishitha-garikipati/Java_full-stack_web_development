<%-- <!DOCTYPE html>
<html>
<head>
    <title>Registration</title>
<link rel="stylesheet" type="text/css" href="styles.css"/>
</head>
<body>
  <%@include file="mainnavbar.jsp" %>
    <h3 style="text-align: center;"><u>Customer Registration</u></h3>
    <div class="form-container">
        <form method="post" action="insertcustomer">
            <table>
               <tr>
                    <td><label for="cname">Enter Name</label></td>
                    <td><input type="text" id="cname" name="cname" required/></td>
                </tr>
                <tr>
                    <td><label>Select Gender</label></td>
                    <td>
                        <input type="radio" id="male" name="cgender" value="MALE" required/>
                        <label for="male">Male</label>
                        <input type="radio" id="female" name="cgender" value="FEMALE" required/>
                        <label for="female">Female</label>
                        <input type="radio" id="others" name="cgender" value="OTHERS" required/>
                        <label for="others">Others</label>
                    </td>
                </tr>
                <tr>
                    <td><label for="cdob">Enter Date of Birth</label></td>
                    <td><input type="date" id="cdob" name="cdob" required/></td>
                </tr>
                
               <tr>
                    <td><label for="cemail">Enter Email ID</label></td>
                    <td><input type="email" id="cemail" name="cemail" required/></td>
                </tr>
                <tr>
                    <td><label for="clocation">Enter Location</label></td>
                    <td><input type="text" id="clocation" name="clocation" required/></td>
                </tr>
                
                 <tr>
                    <td><label for="cpwd">Enter Password</label></td>
                    <td><input type="password" id="cpwd" name="cpwd" required/></td>
                </tr>
                <tr>
                    <td><label for="ccontact">Enter Contact</label></td>
                    <td><input type="number" id="ccontact" name="ccontact" required/></td>
                </tr>
                <tr>
                    <td colspan="2" class="button-container">
                        <input type="submit" value="Register"/>
                        <input type="reset" value="Clear"/>
                    </td>
                </tr>
            </table>
        </form>
    </div>
</body>
</html> --%>