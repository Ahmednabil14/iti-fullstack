from blog.post import posts_blueprint
from flask import render_template, redirect, url_for, request
from blog.models import db, Post
from .form import PostForm
import os
from werkzeug.utils import secure_filename
from flask_login import login_required, current_user

@posts_blueprint.route("/", endpoint="home")
def home():
    posts = Post.query.all()
    return render_template("post/home.html", posts=posts)

@posts_blueprint.route("/Details/<int:id>", endpoint="post_details")
@login_required
def details(id):
    post = Post.query.get(id)
    return render_template("post/details.html", post=post)

@posts_blueprint.route("/Delete/<int:id>", endpoint="delete")
@login_required
def delete(id):
    post = Post.query.get(id)
    if current_user == post.user:
        db.session.delete(post)
        db.session.commit()
    else:
        return "You don't have permission to delete this post"
    return redirect(url_for("posts.home"))

@posts_blueprint.route("/Create", endpoint="create", methods=["GET", "POST"])
@login_required
def create():
    form = PostForm()
    if form.validate_on_submit():
        image = request.files["image"]
        image_name = secure_filename(image.filename)
        image.save(os.path.join("blog/static/images/posts", image_name))     
        post = Post(name=request.form["title"], description=request.form["content"], 
                    image=request.files["image"].filename, user=current_user)
        db.session.add(post)
        db.session.commit()
        return redirect(url_for("posts.home"))
    return render_template("post/form.html", form=form)

@posts_blueprint.route("/Edit/<int:id>", endpoint="update", methods=["GET", "POST"])
@login_required
def update(id):
    post = Post.query.get(id)
    form = PostForm()
    if request.method == "POST":
        if form.validate_on_submit() and current_user == post.user:
            if request.form["title"]:
                post.name = request.form["title"]
            if request.form["content"]:
                post.description = request.form["content"]
            if request.files["image"]:
                image = request.files["image"]
                image_name = secure_filename(image.filename)
                image.save(os.path.join("blog/static/images/posts", image_name))
                post.image = image_name
        db.session.commit()
        return redirect(url_for("posts.home"))
    if current_user == post.user:
        return render_template("post/form.html", form=form)
    else:
        return "You don't have permission to delete this post"
