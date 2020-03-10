

## Taskify
A React App for creating User Stories

##### Login Page
![alt text](https://res.cloudinary.com/dreamqube-technology-limited/image/upload/v1583831703/flipad/Screenshot_2020-03-10_10.14.48_qikqfd.png)

##### Create A Story Page
![alt text](https://res.cloudinary.com/dreamqube-technology-limited/image/upload/v1583831747/flipad/Screenshot_2020-03-10_10.15.39_glfsot.png)

### Dependencies

- create-react-app
- redux
- react-hooks
- Jwt(JSON Web Token)
- SASS

### Features

##### As Admin
- Login : `/login`
- Dashborad : `/dashboard`
- View Single Story (View story information as well as Approve/Reject Story) - `/view/id`

##### As User
- Login : `/login`
- Dashborad : `/dashboard`
- View Single Story (View story information Only)  - `/view/id`
- Create A Story - `/create`


### Usage
- Clone the repo: Run git clone https://github.com/yomigeek/task-app.git in the folder where you want the repo to be saved.
- Navigate into the newly created folder and install the dependencies using your command line: cd folder_name && npm install
Start the app by using npm run start and for development use npm run dev
- Run npm install
- Rename .env.example to .env
- To login navigate to `/login`. you can use any dummy email and password to login (e.g email: test@example.com, password: exampletesttest)
- After you are logged in as a user, you can create a new story and see the list of your stories
- After you are logged in as an Admin you can see list of stories to review and you can accept or reject

### Assumptions (Note)
- On the login page, you can use any dummy email and password to login(e.g email: test@example.com, password: exampletesttest), however you must toggle to the right role, for an Admin toggle should be on 'Admin' while for User, toggle should be on 'User'
- API calls are made to https://rest-api-dummy.herokuapp.com/api to instead of https://test-archimides.free.beeceptor.com/ due to 429 issues as result of so many calls to the Test Archimides API. 
Note: Both APIs returns same data
- API is dummy, thus no calls is persistent, i.e no information is updated or saved in a data storage or database. Therefore, you will only notice on the spot update such as the approval or rejection of a story by an Admin, once the page is refreshed, the story status is back to dummy information from the API
- Token generated have been wired into the application config variable settings in the server where the app was deployed and can last for long time, so do not worry about token expiring
- Images are saved on cloudinary to ensure it loads faster
