# Welcome to Cloud Functions for Firebase for Python!
# To get started, simply uncomment the below code or create your own.
# Deploy with `firebase deploy`
from firebase_admin import initialize_app
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from firebase_functions import https_fn

initialize_app()


@https_fn.on_call()
def send_email(request: https_fn.CallableRequest):

  data = request.data
  message_text = data.get('message')
  name = data.get('name', 'No Name Provided')
  email = data.get('email', 'No Email Provided')
  phone = data.get('phone', 'No Phone Provided')

  receiver_email = "adeleyeadeyemib@gmail.com"
  sender = "Instafind <noreply@instafind.ng>"
  sender_email = "noreply@instafind.ng"
  password = "yzE%e3kt"

  msg = MIMEMultipart()
  msg["From"] = sender
  msg["To"] = receiver_email
  msg["Subject"] = "Contact Email From leatra.com"

  body = f"Name: {name}\nEmail: {email}\nPhone: {phone}\nMessage: {message_text}"
  msg.attach(MIMEText(body, 'plain'))

  server = smtplib.SMTP('smtp.zoho.com', 587)
  server.starttls()
  server.login(sender_email, password)
  text = msg.as_string()
  server.sendmail(sender_email, receiver_email, text)
  server.quit()

  return ('Email sent successfully')

