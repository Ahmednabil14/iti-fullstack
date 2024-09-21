from odoo import fields, models


class AddPublisher(models.TransientModel):
    _name = 'lr.add.publisher'

    book_id = fields.Many2one('lr.book')
    publisher_id = fields.Many2one('lr.publisher')

    def action_add_publisher(self):
        self.ensure_one()
        self.book_id.publisher_id = self.publisher_id.id