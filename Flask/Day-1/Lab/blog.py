from flask import Flask, render_template, redirect, url_for, request
from flask_sqlalchemy import SQLAlchemy

blog = Flask(__name__)

blog.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///blog.db'
db = SQLAlchemy(blog)


class Post(db.Model):
    """post model"""
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=True)
    description = db.Column(db.String, nullable=True)
    image = db.Column(db.String, nullable=True)


@blog.route("/", endpoint="home")
def home():
    posts = Post.query.all()
    return render_template("post/home.html", posts=posts)

@blog.route("/Details/<int:id>", endpoint="post_details")
def details(id):
    post = Post.query.get(id)
    return render_template("post/details.html", post=post)

@blog.route("/Delete/<int:id>", endpoint="delete")
def delete(id):
    post = Post.query.get(id)
    db.session.delete(post)
    db.session.commit()
    return redirect(url_for("home"))

@blog.route("/Create", endpoint="create", methods=["GET", "POST"])
def create():
    if request.method == "POST":
        print(request.form)
        post = Post(name=request.form["name"],
                    description=request.form["description"],
                    image=request.form["image"])
        db.session.add(post)
        db.session.commit()
        return redirect(url_for("home"))
    return render_template("post/create.html")

@blog.route("/Edit/<int:id>", endpoint="update", methods=["GET", "POST"])
def update(id):
    post = Post.query.get(id)
    if request.method == "POST":
        for index, field in enumerate(request.form):
            if request.form[field]:
                setattr(post, field, request.form[field])
                db.session.commit()
        return redirect(url_for("home"))
    return render_template("post/update.html", post=post)

