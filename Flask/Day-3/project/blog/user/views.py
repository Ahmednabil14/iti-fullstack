from blog.user import users_blueprint
from flask import render_template, request, redirect, url_for, flash
from .register_form import RegisterForm
from blog.user.login_form import LoginForm
from blog.models import User, db
from flask_login import login_user, logout_user, current_user, login_required

@users_blueprint.route("/<int:id>", endpoint="posts")
@login_required
def posts(id):
    user_posts = current_user.posts
    return render_template("user/user_posts.html", user_posts=user_posts)

@users_blueprint.route("/register",endpoint="register", methods=["GET", "POST"])
def register():
    form = RegisterForm()
    if form.validate_on_submit():
        data = dict(request.form)
        del data['csrf_token']
        del data['submit']
        user = User(**data)
        db.session.add(user)
        db.session.commit()
        return redirect(url_for("user.login"))        
    return render_template("user/register.html", form=form)

@users_blueprint.route("/login", endpoint="login", methods=["GET", "POST"])
def login():
    form = LoginForm()
    if form.validate_on_submit():
        user = User.query.filter_by(email=request.form["email"]).first()
        if user and user.password == request.form["password"]:
            u = login_user(user)
            print(u)
            return redirect(url_for("posts.home"))
        else:
            flash("Invalid email or password")  
    return render_template("user/login.html", form=form)

@users_blueprint.route("/logout", endpoint="logout", methods=["GET"])
def logout():
    logout_user()
    return redirect(url_for("posts.home"))
