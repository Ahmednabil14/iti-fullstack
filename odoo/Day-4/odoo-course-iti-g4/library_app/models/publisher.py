from odoo import models, fields


class Publisher(models.Model):
    _name = 'lr.publisher'
    _description = 'Publisher'
    # _rec_name = 'national_id'

    name = fields.Char(required=True)
    active = fields.Boolean(default=True)
    image = fields.Image()
    national_id = fields.Char(string='National ID', required=True)
    is_available = fields.Boolean()
    date_join = fields.Date()
    # date_join = fields.Date(readonly=True)
    book_ids = fields.One2many('lr.book', 'publisher_id')
    other_book_ids = fields.Many2many('lr.book')
