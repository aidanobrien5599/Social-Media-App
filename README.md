This project is a full-stack CRUD application with a fully-functioning log-in/log-out systems like a social network website. 
Personally, this was to push me on multiplie fronts: to build a website with a React front end and connect it to a larger Flask API, 
and use some more progessional tooling than I have previously used. I decided against simple JSK elements, 
and instead utilized the UI framework Semantic UI. I also did API requests with axios instead of .fetch as I found this to be more intuitive. 
For the future, if I decide to comeback to this project, I would like to add a navbar to search up other users, 
a setting page for a user to edit or delete their account, or use this project as the base for a larger more interesting/novel project idea.
To run this app, you will need to do the following:
Run the back end flask API:
export FLASK_APP=api
export FLASK_DEBUG=1
flask run
Download all dependencies
Set up react app
npx create-react-app login-system
import files from this project
npm start
