from flask import Blueprint
import flask_login
from blog.models import User

login_manager = flask_login.LoginManager()
login_manager.login_view = "user.login"

@login_manager.user_loader
def load_user(user_id):
    """Load user by ID."""
    return User.query.get(user_id)
    
users_blueprint = Blueprint('user', __name__, url_prefix='/user')
from blog.user import views