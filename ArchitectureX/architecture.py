from flask import Flask,redirect,url_for,render_template,request

app=Flask(__name__)
@app.route('/')
def home():
    return render_template("homepage.html")
@app.route("/projects")
def projects():
    return render_template("projects.html")
@app.route("/crew")
def crew():
    return render_template("crew.html")
if __name__ == '__main__':
    app.run(debug=True)