from flask_restful import fields

user_serilizer ={
    "id": fields.Integer,
    "first_name": fields.String,
    "last_name": fields.String,
}


post_serializers = {
    "id": fields.Integer,
    "name":fields.String,
    "description":fields.String,
    "image":fields.String,
    "user_id":fields.Integer,
    "user" :fields.Nested(user_serilizer)
}