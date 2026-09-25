
export const PASSWORD_RESET_TEMPLATE = `

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
  <title>Password Reset</title>
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap" rel="stylesheet" type="text/css">
  <style type="text/css">
    body {
      margin: 0;
      padding: 0;
      font-family: 'Open Sans', sans-serif;
      background: #E5E5E5;
    }

    table, td {
      border-collapse: collapse;
    }

    .container {
      width: 100%;
      max-width: 500px;
      margin: 70px 0px;
      background-color: #ffffff;
    }

    .main-content {
      padding: 48px 30px 40px;
      color: #000000;
    }

    .button {
      width: 100%;
      background: #22D172;
      text-decoration: none;
      display: inline-block;
      padding: 10px 0;
      color: #fff;
      font-size: 14px;
      text-align: center;
      font-weight: bold;
      border-radius: 7px;
    }

    @media only screen and (max-width: 480px) {
      .container {
        width: 80% !important;
      }

      .button {
        width: 50% !important;
      }
    }
  </style>
</head>

<body>
  <table width="100%" cellspacing="0" cellpadding="0" border="0" align="center" bgcolor="#F6FAFB">
    <tbody>
      <tr>
        <td valign="top" align="center">
          <table class="container" width="600" cellspacing="0" cellpadding="0" border="0">
            <tbody>
              <tr>
                <td class="main-content">
                  <table width="100%" cellspacing="0" cellpadding="0" border="0">
                    <tbody>
                      <tr>
                        <td style="padding: 0 0 24px; font-size: 18px; line-height: 150%; font-weight: bold;">
                          Forgot your password?
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 0 0 10px; font-size: 14px; line-height: 150%;">
                          We received a password reset request for your account: <span style="color: #4C83EE;">{{email}}</span>.
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 0 0 16px; font-size: 14px; line-height: 150%; font-weight: 700;">
                          Use the OTP below to reset the password.
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 0 0 24px;">
                          <p class="button" >{{otp}}</p>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 0 0 10px; font-size: 14px; line-height: 150%;">
                          The password reset otp is only valid for the next 15 minutes.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </table>
</body>
</html>
`





export const VERIFICATION_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Email Verification</title>

  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">

  <style>
    *{
      margin:0;
      padding:0;
      box-sizing:border-box;
    }

    body{
      background:#F4F7FB;
      font-family:'Inter',Arial,sans-serif;
      color:#374151;
      padding:40px 15px;
    }

    table{
      border-collapse:collapse;
    }

    .wrapper{
      width:100%;
    }

    .container{
      max-width:600px;
      margin:auto;
      background:#ffffff;
      border-radius:18px;
      overflow:hidden;
      box-shadow:0 12px 40px rgba(0,0,0,.08);
    }

    .header{
      background:linear-gradient(135deg,#4F46E5,#2563EB);
      padding:45px 35px;
      text-align:center;
      color:#fff;
    }

    .logo{
      width:64px;
      height:64px;
      line-height:64px;
      margin:auto;
      background:rgba(255,255,255,.18);
      border-radius:50%;
      font-size:28px;
    }

    .header h1{
      margin-top:18px;
      font-size:28px;
      font-weight:700;
    }

    .header p{
      margin-top:10px;
      font-size:15px;
      color:rgba(255,255,255,.9);
      line-height:1.6;
    }

    .content{
      padding:40px 35px;
    }

    .content h2{
      font-size:24px;
      color:#111827;
      margin-bottom:18px;
    }

    .content p{
      font-size:15px;
      line-height:1.8;
      color:#4B5563;
      margin-bottom:18px;
    }

    .email{
      color:#2563EB;
      font-weight:600;
      word-break:break-all;
    }

    .otp-section{
      margin:35px 0;
      text-align:center;
    }

    .otp-label{
      font-size:14px;
      color:#6B7280;
      margin-bottom:12px;
    }

    .otp-box{
      display:inline-block;
      padding:18px 36px;
      background:#EEF4FF;
      border:2px dashed #2563EB;
      border-radius:14px;
      font-size:36px;
      font-weight:800;
      color:#2563EB;
      letter-spacing:10px;
    }

    .expire{
      margin-top:18px;
      font-size:14px;
      color:#EF4444;
      font-weight:600;
    }

    .security-box{
      background:#FFF8E8;
      border-left:4px solid #F59E0B;
      border-radius:10px;
      padding:18px;
      margin-top:30px;
    }

    .security-box h3{
      font-size:16px;
      color:#92400E;
      margin-bottom:8px;
    }

    .security-box p{
      margin:0;
      color:#92400E;
      font-size:14px;
      line-height:1.7;
    }

    .divider{
      height:1px;
      background:#E5E7EB;
      margin:35px 0;
    }

    .footer{
      text-align:center;
      font-size:13px;
      color:#6B7280;
      line-height:1.8;
    }

    .footer strong{
      color:#111827;
    }

    @media only screen and (max-width:600px){

      body{
        padding:20px 10px;
      }

      .header{
        padding:35px 25px;
      }

      .content{
        padding:30px 22px;
      }

      .otp-box{
        font-size:28px;
        padding:16px 24px;
        letter-spacing:7px;
      }

      .header h1{
        font-size:24px;
      }

      .content h2{
        font-size:22px;
      }

    }

  </style>
</head>

<body>

<table class="wrapper" width="100%">
<tr>
<td align="center">
<table class="container" width="100%">
<tr>
<td class="header">
<div class="logo">🔐</div>
<h1>Email Verification</h1>
<p>Secure your account by verifying your email address.</p>
</td>
</tr>

<tr>
<td class="content">

<h2>Hello 👋</h2>

<p>Thank you for creating your account. To continue, please verify the email address below.</p>

<p class="email">{{email}}</p>
<div class="otp-section">
<div class="otp-label">Your One-Time Password (OTP)</div>
<div class="otp-box">
{{otp}}
</div>

<div class="expire">
Valid for 15 minutes
</div>

</div>

<p>
Enter this verification code in the application to complete your registration.
</p>

<div class="security-box">

<h3>🛡️ Security Reminder</h3>

<p>
Never share this OTP with anyone. Our team will never ask you for your verification code. If you did not request this email, you can safely ignore it.
</p>

</div>

<div class="divider"></div>

<div class="footer">

<p>
This is an automated email. Please do not reply to this message.
</p>

<p>
© 2026 <strong>Orvix</strong>. All rights reserved.
</p>

</div>

</td>
</tr>

</table>

</td>
</tr>
</table>

</body>

</html>
`;




export const CUSTOMER_ACCESS_OTP_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">

<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Customer Access Verification</title>

<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">

<style>

*{
margin:0;
padding:0;
box-sizing:border-box;
}

body{
background:#F3F5F7;
font-family:'Inter',Arial,sans-serif;
padding:40px 15px;
color:#374151;
}

table{
border-collapse:collapse;
}

.container{
max-width:620px;
margin:auto;
background:#ffffff;
border-radius:18px;
overflow:hidden;
box-shadow:0 15px 40px rgba(0,0,0,.08);
}

.header{
background:#0F172A;
padding:45px 35px;
text-align:center;
color:#fff;
}

.icon{
width:72px;
height:72px;
margin:auto;
line-height:72px;
border-radius:50%;
background:rgba(255,255,255,.1);
font-size:34px;
}

.header h1{
margin-top:18px;
font-size:28px;
font-weight:700;
}

.header p{
margin-top:12px;
font-size:15px;
line-height:1.7;
color:rgba(255,255,255,.85);
}

.content{
padding:40px 35px;
}

.alert{
background:#EFF6FF;
border-left:5px solid #2563EB;
padding:18px;
border-radius:10px;
margin-bottom:28px;
}

.alert strong{
display:block;
font-size:16px;
margin-bottom:8px;
color:#1E3A8A;
}

.alert p{
font-size:14px;
line-height:1.7;
color:#475569;
}

.email-box{
margin:22px 0;
padding:16px;
background:#F8FAFC;
border:1px solid #E2E8F0;
border-radius:10px;
text-align:center;
font-size:15px;
font-weight:600;
color:#2563EB;
word-break:break-all;
}

.otp-title{
text-align:center;
font-size:14px;
color:#64748B;
margin-top:30px;
margin-bottom:12px;
}

.otp-box{
display:block;
width:fit-content;
margin:auto;
padding:18px 36px;
background:#0F172A;
border-radius:12px;
font-size:38px;
font-weight:800;
letter-spacing:10px;
color:#38BDF8;
}

.expiry{
margin-top:18px;
text-align:center;
font-size:14px;
font-weight:600;
color:#DC2626;
}

.info{
margin-top:35px;
background:#FEFCE8;
border-left:5px solid #EAB308;
padding:18px;
border-radius:10px;
}

.info h3{
font-size:16px;
margin-bottom:10px;
color:#854D0E;
}

.info ul{
padding-left:18px;
color:#854D0E;
line-height:1.8;
font-size:14px;
}

.footer{
margin-top:35px;
padding-top:24px;
border-top:1px solid #E5E7EB;
font-size:13px;
text-align:center;
color:#6B7280;
line-height:1.8;
}

@media(max-width:600px){

.header{
padding:35px 25px;
}

.content{
padding:30px 22px;
}

.otp-box{
font-size:30px;
letter-spacing:6px;
padding:16px 24px;
}

}

</style>

</head>

<body>

<table width="100%">
<tr>
<td align="center">

<table class="container" width="100%">

<tr>

<td class="header">

<div class="icon">
🛡️
</div>

<h1>Customer Access Verification</h1>

<p>
A request has been made to access sensitive customer information.
For your security, verification is required before access is granted.
</p>

</td>

</tr>

<tr>

<td class="content">

<div class="alert">

<strong>Authorization Required</strong>

<p>
An authorized user is attempting to view customer details associated with the account below.
</p>

</div>

<div class="email-box">
{{email}}
</div>

<div class="otp-title">
Verification Code
</div>

<div class="otp-box">
{{otp}}
</div>

<div class="expiry">
This code expires in 15 minutes.
</div>

<div class="info">

<h3>Important Security Information</h3>

<ul>
<li>Only provide this OTP if you initiated this request.</li>
<li>Never share this verification code with anyone.</li>
<li>Our support team will never ask for your OTP.</li>
<li>If this request wasn't made by you, ignore this email.</li>
</ul>

</div>

<div class="footer">

This is an automated security notification.<br>
If you have concerns about unauthorized access, please contact your administrator immediately.

<br><br>

© 2026 <strong>Orvix</strong>

</div>

</td>

</tr>

</table>

</td>
</tr>
</table>

</body>
</html>
`;