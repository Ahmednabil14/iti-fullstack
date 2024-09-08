from flask_restful import Resource, marshal_with
from blog.models import Post
from blog.post.api.serializers import *
from blog.post.api.parsers import *
from blog.models import db

class PostList(Resource):
    @marshal_with(post_serializers)
    def get(self):
        posts = Post.query.all()
        return posts

    @marshal_with(post_serializers)
    def post(self):
        post_args = post_parser.parse_args()
        post = Post(**post_args)
        db.session.add(post)
        db.session.commit()
        return post, 201
    

class HandelPost(Resource):
    @marshal_with(post_serializers)
    def get(self, post_id):
        post = Post.query.get(post_id)
        if post is None:
            return {'message': 'Post not found'}, 404
        return post
    
    @marshal_with(post_serializers)
    def put(self, post_id):
        post = Post.query.get(post_id)
        if post is None:
            return {'message': 'Post not found'}, 404
        post_args = post_parser.parse_args()
        for key, value in post_args.items():
            if value:
                setattr(post, key, value)
        db.session.commit()
        return post
        
    @marshal_with(post_serializers)
    def delete(self, post_id):
        post = Post.query.get(post_id)
        if post is None:
            return {'message': 'Post not found'}, 404
        db.session.delete(post)
        db.session.commit()
        return Post.query.all()
    