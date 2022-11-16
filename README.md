# Mail Scheduler

## Develop Mail Scheduler application to set-up mail accounts, compose mails and schedule their delivery

### Context

Mail Scheduler is an online application that allows the registered users to set-up email account configuration, draft emails and schedule their delivery at an exact date and time.

The scheduling feature allows the working professionals to send out the important message at the same time respect downtime of the recepients.

Often due to hectic travel schedule, wishing friends and families on their birthdays / anniversaries could be missed out. The Mail Scheduler will help you to schedule greetings mail well in advance ensuring that your wishes would never be missed out.

### Problem

Mail service transactions are user specific.

Hence setting-up configurations, composing new mail, scheduling their delivery, viewing the scheduled / sent mails should all be performed only by the registered user.

You, as a developer, have been assigned the task to design this application.

The application has to fulfill the following requirements:

- Allow new users to get registered
- Existing users should be able to login
- Only the logged in users should be allowed to proceed with the mailing views
- For any attempt made to directly access mailing views, users should be navigated to login view
- Allow users to configure mail account, edit and delete the same
- Allow users to compose and schedule new mail for the selected mail account
- Allow users to view scheduled mails and sent mails as separate lists
- The users can modify only the scheduled mail by selecting it from the scheduled mail list
- If while composing a new mail or making modifications in existing mail, the user attempts to leave the view, the application should notify the user about unsaved changes. 
- Additionally, the application should request confirmation from user to save the changes or leave the view without saving the changes.

### Instructions

1. The UI should be designed using Angular Material components, themes and schematics.
2. All form field inputs should be validated adequately.
3. Access to mailing views should be controlled to prevent unauthenticated access and lose unsaved changes.
4. The mail data should be persisted in json-server


**Note:**

- The boilerplate contains backend service that runs at port 3000, and allows users to make requests to register and authenticate:
    - command to start the server: `node app.js`
    - post request to register 
        - api end point url : `http://localhost:3000/register`
        - data to send : registration details (email, password, confirm password)
    - post request to authenticate : 
        - api end point url : `http://localhost:3000/authenticate`
        - data to send : login details (email, password)

- The boilerplate contains `scheduler.json` file that stores the data for mail configurations and user emails.
- The data from the file is accessed by requesting json-server running at port 3001

**For more details on the working of the application watch the video available in this [git repository](https://myrepos.stackroute.niit.com/gps-frontend-workspace/gps-frontend-challenge-boilerplates/angular2-boilerplates/mail-scheduler)**
