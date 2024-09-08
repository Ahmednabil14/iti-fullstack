from wtforms import StringField, validators, FileField, SubmitField
from flask_wtf import FlaskForm

class PostForm(FlaskForm):
    title = StringField('Title')
    content = StringField('Content')
    image = FileField('Image')
    submit = SubmitField("Add Post")