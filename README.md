                           NEWS FETCHER APP

This is a simple attempt to learn how websites are made and how they work with APIs and API KEYS.

The project is a basic News fetcher App built using:
Frontend - HTML,CSS,Javascript
Backend - FastAPI

I had doubts on how wesbites work with API,API KEYS and how frotend and backend work together, so in the journey of learning that this will be my first simple attempt.

I will explain what i learn in simple words as a proof, THIS IS NOT CHATGPT-ied -
FIrst the UI contains only one single search input space and search button, the user enters what they wish to search for and after clicking the search button, the corresponding function in javascript is triggered.
The js script sends request to the backend with 'topic' that is entered by the user as input and backend which is running simultaneously receives the requests and sends another request to the news API server with topic and api key. The news server check the api key and gives access to the news which is returned to the backend and backend return the data in json format to js script which display them on the screen.

This project is mainly focused on learning and understanding the fundamentals of web development and APIs.

![alt text](image.png)

![alt text](image-1.png)
