# Sending Email Message by React
## Using [EmailJs](https://www.emailjs.com/) is one of the most important decision of project


In this project, we aim to send a message to the user's email using the emailJs tool.
At the beginning of the project, we design our form in the Request section. 
### The entire design of this form is handled by Bootstrap.
By using rows and segmenting sections of the page with columns, we create a fully responsive page.

![Requests](https://github.com/user-attachments/assets/f245725c-f882-4d17-98db-d4f4deba583a)

After completing the JSX part of the project, we proceed to send the messages generated through the form.
Using the [npm](https://www.npmjs.com/) website, we download the npm-com package.
Then, we complete its code using the documentation provided in the send-form section.
The syntax provided by the emailJs documentation is as follows:

```
emailjs.sendForm(serviceID, templateID, templateParams, options);
```
It should be noted that in the `templateParams` section, we can use a function we created to access the _target_ and place them in this section.

Then, using [ReactToastify](https://www.npmjs.com/package/react-toastify) in the then section, we specify that if the sending status is successful, it should send us a success message.
If it fails to properly recognize the email, it should send us an error message.

![Requests3](https://github.com/user-attachments/assets/a081197b-0a44-4e5f-905d-fdcc9a2c6d12)

Finally, if we check our email, we will see that it has been successfully sent.


![Requests2](https://github.com/user-attachments/assets/44a69b0b-6c12-4791-9a6d-73fc32ade47f)

The written codes can be viewed in the [src](https://github.com/aiaaee/Sending_Email_React/tree/main/Authentication/src) section.
