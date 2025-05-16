Socialnet is a full-stack CRUD application that is a basic prototype for a social media web app, including a fully-functioning login/logout/signup system, a way to search up and interact with other users in the database via dynamic routing, and a settings page utilizing REST patch requests. Personally, this was to push me on multiple fronts: to build a website with a React front end, connect it to a larger Flask API, and use some more professional tooling than I have previously used. I decided against simple JSK elements and instead utilized the UI framework Semantic UI. I also did API requests with axios instead of .fetch.
To run this app, you will need to do the following:
1. Run the back end flask API:
- export FLASK_APP=api
- export FLASK_DEBUG=1
- flask run
2. Download all dependencies
3. Set up react app
- npx create-react-app login-system
- cd login-system
- import files from this project
- npm start
