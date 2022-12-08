To Start this Project:

- Open Two Terminals
- cd one into the Backend folder and one in the Frontend folder

In the Backend Terminal:

- make sure a venv has been created and activated (if you store venvs in a seperate folder, cd into that folder to start venv and than return to Backend project folder)
- to create new venv in the command line enter 
  $ python3 -m venv "venv_name"
- to activate your new venv in the command line enter 
  $ source "venv_name"/bin/activate


- make sure to install all project requirements in the command line by entering 
  $ pip install -r requirements.txt
- start postgres with brew services start postgres

- create a local database in the command line by entering 
  $ createdb dr_db

if confronted with migrations errors (there should be no migrations required):
- in dr_app views.py comment out Line 5 (import dotenv) and Line 9 (import googlemaps)
- from the command line make model migrations by entering 
  $ python manage.py makemigrations dr_app 
  $ python manage.py migrate

- paste the following onto line 158 of dr_app/views.py
YELP_API_KEY = "nl2gjDh-4E1v_VaVx59srbY3ZbCotkhjnGNYwf1qVOBRhP85L_m3sMhwKIwUOFaUMQfN0nIgXq-TUqwC6qJhxe6dA6gYnIjb7Eimr5zvJqq2kOvT5r-6YhMaHdv7YnYx"

In the Frontend Terminal:

-due to certain out of date dependices run the following command to install necessacry dependices:
  $ npm install --force 
  alt
  $ npm install legacy--peer-deps
  
  *there will be an aduit message as well as warnings for vunrelibilties* 
  as this was a school project there was not adequate time to find new packages to repair the app, I am leaving the legacy version up as a functional but noted learning expirence

- add goodle maps api keys to src/compnonets/map.jsx

- paste the following onto line 53:
googleMapsApiKey: "AIzaSyDJoyNs_BRc2WOkSw9gmxvbGC-B_P2CWlY",

- to start frontend enivroment from the command line enter
  $ npm run watch
  
  
-Switch to Front End Terminal-
 
 -in the frontend folder enter in the command line
  $ python manage.py runserver
  

-Open your internet browser-

 enter localhost:8000 in the address bar
  
At this point the project should be live. Create an account and play around with the enviroment.


*Tip: Leave two terminals running in the background and open a third terminal to interact with the database and git



Notes:


Assignment:
Create a full stack web application using two API’s that solves a problem utilizing Django, React, and PostgreSQL


Approach:
I created a schema of how I wanted the website to function. 
Afterwards I built the skeleton out so that I had a working Django/React file that read Hello World
From there I thought the different models I might need, I knew that I needed 36 activates for my activity wheel so I wrote them into a json with matching attributes in my model. 
Once I had loaded my json data in to my db, I set about constructing the front end of my website to accomplish my first goal, spinning the wheel and displaying the result.Thsi time instead of passing my components to a js file to render in an html template, I passed them into my react app.jsx files where I would conditional render them based on the situation. For instances, once a set my activity wheel in motion it would randomly choose a number in my range and pas it into my backend. My backend would grab the corresponding id from the database and return the instance the package of data that is associated with it. This got passed to my react frontend where it was triggered a conditional rendering of my prize window which displayed the results of the spin and gave the user an option to proceed or spin again. 
If the user choose to click the accept button it fired off another series of functions that brought a user to he map page, made an api call to Google Maps to display Map Data and then used a set of keywords associated with my prize number to make a yelp API call to display markers at the 20 closest business to my default location where someone could do the specified activity.
I additionally added the functionality to sign up, log in/log out, display who is logged in on the terminal and home button from the map and wheel pages. I also included a geolocate function on my map that allowed a person to pinpoint their location using there IP address and a search bar to look up places by address.  

Takeaways:
For my first real web application I am pretty pleased with how it turned out. In retrospect I wish I had spent less time on the css styling and more time on the user functionality as I ran out of time and was not able to add the CRUD features I intended to. This project really demonstrated to me how front-end/backend/database/models/and apis all really interact and were crucial for lessons for our last project. (Google API is a hard to use, I spent more time that I care to admit struggling to get its functionality down. Also Bootstrap had an issue with the package version of google maps I had installed, I thought it was an issue with my wheel dependencies


Things to Improve:
-add CRUD functionality to save specific dates
-rebuild in a way that displays addresses attached to the markers