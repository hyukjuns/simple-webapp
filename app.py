from flask import Flask
import requests
app = Flask(__name__)

@app.route("/")
def home():
    res = requests.get('http://127.0.0.1:5000/')
    val = res.status_code
    return f"test: {val}"

if __name__ == "__main__":
    app.run()