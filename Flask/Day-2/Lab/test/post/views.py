from post import posts_blueprint
from flask import render_template, redirect, url_for, request
from models import db, Post

@posts_blueprint.route("/", endpoint="home")
def home():
    posts = Post.query.all()
    return render_template("post/home.html", posts=posts)

@posts_blueprint.route("/Details/<int:id>", endpoint="post_details")
def details(id):
    post = Post.query.get(id)
    return render_template("post/details.html", post=post)

@posts_blueprint.route("/Delete/<int:id>", endpoint="delete")
def delete(id):
    post = Post.query.get(id)
    db.session.delete(post)
    db.session.commit()
    return redirect(url_for("posts.home"))

@posts_blueprint.route("/Create", endpoint="create", methods=["GET", "POST"])
def create():
    if request.method == "POST":
        post = Post(name=request.form["name"],
                    description=request.form["description"],
                    image=request.form["image"])
        db.session.add(post)
        db.session.commit()
        return redirect(url_for("posts.home"))
    return render_template("post/create.html")

@posts_blueprint.route("/Edit/<int:id>", endpoint="update", methods=["GET", "POST"])
def update(id):
    post = Post.query.get(id)
    if request.method == "POST":
        for index, field in enumerate(request.form):
            if request.form[field]:
                setattr(post, field, request.form[field])
                db.session.commit()
        return redirect(url_for("posts.home"))
    return render_template("post/update.html", post=post)
