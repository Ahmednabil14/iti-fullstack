from wtforms import Form, StringField, validators, FileField, SubmitField
from flask_wtf import FlaskForm

class PostForm(FlaskForm):
    title = StringField('Title' , validators=[validators.DataRequired(), validators.Length(5)])
    content = StringField('Content' , validators=[validators.DataRequired()])
    image = FileField('Image')
    submit = SubmitField("Save new Student")