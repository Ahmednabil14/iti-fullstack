from flask import Flask, render_template
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


@blog.route("/")
def home():
    return render_template("post/home.html")