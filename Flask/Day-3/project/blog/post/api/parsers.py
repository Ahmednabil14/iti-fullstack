from flask_restful import reqparse


post_parser = reqparse.RequestParser()

post_parser.add_argument("name", required=False, type=str, help="Name is required")
post_parser.add_argument("description", required=False, type=str, help="description is required")
post_parser.add_argument("image", required=False, type=str, help="image is required")
post_parser.add_argument("user_id", required=False, type=int, help="User ID is required")