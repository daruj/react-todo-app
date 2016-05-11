React & Dedux ToDo App!
===================


Let's recap all we have learned on a final ToDo App!

----------


Step By Step
-------------

 1. Install MongoDb from : https://www.mongodb.com/download-center?jmp=nav#community

	 a) Check if MongoDb was successfuly installed.

 2. Install RoboMongo from : https://robomongo.org/

	 a) Open RoboMongo and create a new Local Connection

 3. Install NodeJs: https://nodejs.org/en/download/

	 a) Once nodejs is installed, check if npm is installed too: npm --version (in case npm was not installed alongside with node you will have to do it manually)

 4. Clone the following repo: https://github.com/daruj/react-todo-app

	 a) If you can't clone it using ssh you should read this link: https://help.github.com/articles/generating-an-ssh-key/

	Notice that we have splitted the project in frontend and backend.

 5. Install all node dependencies modules. (You will find a package.json inside each folder (frontend and backend). That file tells you all the important information about your app)

	a) Go to backend and install all its dependencies:

		i) Open a terminal and type: cd backend
		ii) Now run: npm install

	b) Go to frontend and install all its dependencies:

		i) Open a terminal and type: cd backend
		ii) Now run: npm install

 6. Install babel-cli globally : npm install -g babel-cli
 7. Now run: npm start (This will start the API server in http://localhost:3000)
 8. Open Postman (Download this extension if you haven't done that yet from https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop)
 9. Try adding 2 or 3 ToDo items:

    	POST - http://localhost:3000/api/todo
		body (raw) :
		{
	    	"title": "First ToDo item",
    		"done": false //this is a flag that we will use in the future to set the item as completed
		}

 10. Now try getting all the ToDo items you have created:

    GET - http://localhost:3000/api/todo

 11. Let's remove one of them:


    DELETE - http://localhost:3000/api/todo/<(RoboMongo)ItemID>

 12. Now let's set one of the items as completed:

    	PUT - http://localhost:3000/api/todo/<(RoboMongo)ItemID>
		body (raw) :
		{
    		"done": true
		}
