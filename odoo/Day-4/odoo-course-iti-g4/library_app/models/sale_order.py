from odoo import fields, models


class SaleOrder(models.Model):
    _inherit = 'sale.order'

    book_id = fields.Many2one('lr.book')