from urllib import response
from flask import Flask,render_template,request,make_response

import requests
import os
app = Flask(__name__)

@app.route("/")
def home():
    
    return render_template('./index.html', serverInfo="hello2", ClientInfo="world")

if __name__ == "__main__":
    app.run()