from flask import Flask
from config import config_options
from models import db
from flask_migrate import Migrate

def create_app(conf_option='prd'):
    app = Flask(__name__)
    current_conf = config_options[conf_option]
    app.config.from_object(current_conf)
    db.init_app(app)
    migrate = Migrate(app, db)

    from post import posts_blueprint
    app.register_blueprint(posts_blueprint)

    return app