from flask import flask
app = flask(__name__)

@app.route("/")
def home():
    return "hello world"

if __name__ == "__main__":
    app.run()