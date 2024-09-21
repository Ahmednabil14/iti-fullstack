from odoo import models, fields, api
from dateutil.relativedelta import relativedelta
from odoo.exceptions import ValidationError, UserError


class Book(models.Model):
    _name = 'lr.book'
    _inherit = ['mail.thread', 'mail.activity.mixin']
    _description = 'Book'
    # _rec_name = 'code'

    name = fields.Char(copy=False, index=True, tracking=True)
    active = fields.Boolean(default=True)
    code = fields.Char(copy=False, tracking=True)
    price = fields.Float()
    published_date = fields.Date(default=fields.Date.today())
    published_datetime = fields.Datetime(default=fields.Datetime.now())
    is_published = fields.Boolean()
    state = fields.Selection([
        ('draft', 'Draft'),
        ('confirm', 'Confirm'),
        ('published', 'Published'),
    ], default='draft')
    # state = fields.Selection([
    #     ('1', 'Draft'),
    #     ('2', 'Confirm'),
    #     ('3', 'Published'),
    # ])
    cover = fields.Binary()
    publisher_id = fields.Many2one('lr.publisher', domain=[('is_available', '=', True)])
    book_line_ids = fields.One2many('lr.book.line', 'book_id') # label => Book Line
    # age = fields.Integer(compute='_compute_age', readonly=False)
    age = fields.Integer(compute='_compute_age', store=True)

    # no_pages  = fields.Integer(string='Number of Pages') # No Pages

    ref = fields.Char(default="New")

    _sql_constraints = [
        ('name_unique', 'unique (name)', 'Book name must be unique!')
    ]


    """
    search domain [('name', '=', 'book 10'), (), ()]
    """

    def action_draft(self):
        print("inside action_draft")
        for rec in self:
            rec.state = 'draft'

    def action_confirm(self):
        print("inside action_confirm")
        for rec in self:
            rec.state = 'confirm'

    def action_published(self):
        print("inside action_published")
        for rec in self:
            rec.state = 'published'

    # @api.depends('published_date', 'field_two', 'field_three')
    # @api.depends('published_date', 'publisher_id.date_join')
    @api.depends('published_date')
    def _compute_age(self):
        # for rec in self:
        for book in self:
            if book.published_date:
                book.age = relativedelta(fields.Date.today(), book.published_date).years
            else:
                book.age = 0

    @api.onchange('code')
    def _onchange_code(self):
        for rec in self:
            print("inside _onchange_code", rec)

    """
    crud 
    1. create => create(self, vals)
    2. read => _search(self, args, offset=0, limit=None, order=None)
    3. update => write(self, vals)
    4. delete => unlink(self)
    """

    @api.model
    def create(self, vals):
        res = super(Book, self).create(vals)
        print("inside create")
        res.ref = self.env['ir.sequence'].sudo().next_by_code('book_seq')
        return res

    @api.model
    def _search(self, args, offset=0, limit=None, order=None):
        res = super(Book, self)._search(args)
        print("inside _search")
        return res

    def write(self, vals):
        res = super(Book, self).write(vals)
        print("inside write")
        return res

    def unlink(self):
        res = super(Book, self).unlink()
        print("inside unlink")
        return res

    @api.constrains('price')
    def _check_price_value(self):
        for rec in self:
            if rec.price <= 0:
                raise ValidationError("Price must be valid value.")

    def action_add_publisher_wizard(self):
        action = self.env['ir.actions.actions']._for_xml_id('library_app.add_publisher_action')
        # print(self) # lr.book(15,) one record
        # print(self) # lr.book(1, 5, 2, 15, 15) record(set)
        action['context'] = {
            'default_book_id': self.id
        }
        return action

    def action_server_published(self):
        self.action_published()

    @api.model
    def archive_book(self):
        book_ids = self.search([('name', '=', 'book 201')])
        # book_ids = self.search([])
        # book_ids = self.env['lr.book'].search([('name', '=', 'book 201')])
        # self.env['lr.book'].search([('field_name', '=', 'value'),(),()])
        for book in book_ids:
            book.active = False

    """ record set operations methods"""
    # print(book_ids.mapped('ref'))
    # print(book_ids.filtered(lambda line: line.name == 'book1'))
    # print(book_ids.filtered_domain([('name', '=', 'book1')]))
    # print("inside cron job method")

class BookLine(models.Model):
    _name = 'lr.book.line'
    _description = 'Book Line'

    book_id = fields.Many2one('lr.book')
    name = fields.Char()
    date = fields.Date()
    description = fields.Char()



"""
1. python 
class BookLine(models.Model):

2. model 
case1: new model -> _inherit
case2: extension -> _inherit
case2: -> _inherits

"""