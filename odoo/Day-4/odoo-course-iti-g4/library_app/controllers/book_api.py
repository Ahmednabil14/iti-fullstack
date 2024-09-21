from odoo import http
from odoo.http import request
import json


class BookApi(http.Controller):


    @http.route("/book", methods=["POST"], type="http", auth="none", csrf=False)
    def post_book(self):
        args = request.httprequest.data.decode()
        vals = json.loads(args)
        book_id = request.env['lr.book'].sudo().create(vals)
        return request.make_json_response({
            "message": "Book has been created successfully.",
            "data": {
                "id": book_id.id,
                "name": book_id.name
            }
        }, status=201)


    @http.route("/book/<int:book_id>", methods=["PUT"], type="http", auth="none", csrf=False)
    def put_book(self, book_id):
        try:
            args = request.httprequest.data.decode()
            vals = json.loads(args)
            book_id = request.env['lr.book'].sudo().search([('id', '=', book_id)])
            book_id.sudo().write(vals)
            return request.make_json_response({
                "message": "Book has been updated successfully.",
                "data": {
                    "id": book_id.id,
                    "name": book_id.name
                }
            }, status=200)
        except Exception as error:
            print(error)


    @http.route("/book/<int:book_id>", methods=["GET"], type="http", auth="none", csrf=False)
    def get_book(self, book_id):
        try:
            book_id = request.env['lr.book'].sudo().search([('id', '=', book_id)])
            return request.make_json_response({
                "message": 200,
                "data": {
                    "id": book_id.id,
                    "name": book_id.name,
                    "code": book_id.code,
                    "active": book_id.active,
                }
            }, status=200)
        except Exception as error:
            print(error)


    @http.route("/book/<int:book_id>", methods=["DELETE"], type="http", auth="none", csrf=False)
    def delete_book(self, book_id):
        try:
            book_id = request.env['lr.book'].sudo().search([('id', '=', book_id)])
            book_id.sudo().unlink()
            return request.make_json_response({
                "message": "Book has been deleted successfully.",
                "data": {}
            }, status=200)
        except Exception as error:
            print(error)

    """
    try:
    
    except:
    
    """
