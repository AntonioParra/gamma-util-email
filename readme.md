# GAMMA email utility
## Required files
### .env
```
SMTP_HOST=
SMTP_PORT=
SMTP_SECURE=true
SMTP_USER=
SMTP_PASS=
```
## Endpoints
### SendEmail
url
```
/email/sendEmail
```
payload
```
{
    to: 'to@email.email',
    subject: 'mail subject',
    body: 'text body'
}
```