# Online Trading Platform
## Purpose
* This is my 1st big project to develop a full stack app by myself.
* It will be an online trading platform mainly for equities.
* Charts visualization and creation of personal portfolios will be the first end goal.
* Implement machine learning to analyze stocks will be my 2nd end goal, this will be done in the near future when I have the time.

## Demo
* This app uses 2 heroku servers, 1 for the frontend, and another for the backend.
  * Therefore, if may take a while to load the page or for the user registration / sign in.
![Demo](./images/demo.gif)
* Feel free to try out the demo
  > https://onlinetradingplatform.herokuapp.com/
* Creating an account will be required to test the trading feature and modify account settings.
  * Disclaimer, accounts will be deleted without prior notice as this project is still in the development stage.

## How to make this work
* Get your own Django secret key
  * Create your own Django app => copy the secret key => paste into this project's secret key location at settings.py or in your environment.
      ```python
      # Use python 3 to generate your own Django secret key
      import secrets
      print(secrets.token_hex(24))
      ```

* API key is required if you want to use data from IEX cloud.
  * Create free account with IEX at https://iexcloud.io/.
  * Real data is free data but limited. However, simulated data is completely free.
    * If using simulated data, paste the following with the api key in the environment
      > export REACT_APP_iexToken="api_key"
* API key is required to get real news feed from news api
  * Create account for free at https://newsapi.org/
    > export REACT_APP_newsAPI="api_key"
* Add local server address to environment or manually edit in the utility.js file
  > export REACT_APP_DB="http://127.0.0.1:8000"
* Company profile data is taken from https://financialmodelingprep.com
  * no additional settings required
* Use pipenv to install all python dependencies for the backend.
* Use npm to install all frontend related dependencies.

## How to run
1. Postgres is used in the production side
2. Run backend server
    * python manage.py runserver
3. Run Frontend server
    * npm start

## List of major technologies used
* Django
* React
* D3
* changed to sqlite for development, and Postgres for production
* Django Rest Framework
* Redux
* Material-UI

## List of Things to do

* Add multi symbol support on a single chart
* Improve auto logout alert UI
* Improve overall styling
