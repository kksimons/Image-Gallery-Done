import os
import requests
from flask import Flask, request
from dotenv import load_dotenv

load_dotenv(dotenv_path="./.env.local") #to pull the key locally

UNSPLASH_URL="https://api.unsplash.com/photos/random/"
UNSPLASH_KEY=os.environ.get("UNSPLASH_KEY", "") #second argument is default

if not UNSPLASH_KEY:
    raise EnvironmentError("UNSPLASH_KEY is missing, please create one and put it in .env.local")

app = Flask(__name__)

# if view function in Flask returns a dictionary content-type is autoset to json and returns json object
@app.route("/new-image")
def new_image():
    word = request.args.get("query")

    headers = {
        "Accept-Version": "v1", #as per the unsplash docs
        "Authorization": "Client-ID " + UNSPLASH_KEY
    }
    params = {"query": word } #takes the query made from the search box(client) and insert it into the request to the remote unsplash api server

    response = requests.get(url=UNSPLASH_URL, headers=headers, params=params) #result of the get
    
    data = (response.json())
    return data 

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5050) 