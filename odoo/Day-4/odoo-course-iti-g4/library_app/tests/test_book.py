from odoo.tests.common import TransactionCase
from odoo import fields

class TestBook(TransactionCase):

    def setUp(self):
        super(TestBook, self).setUp()

        self.book_01 = self.env['lr.book'].create({
            'name': 'book one',
            'code': '101',
            'active': True,
            'state': 'draft',
            'published_date': fields.Date.today(),
        })

    def test_01_book_values(self):
        book_id = self.book_01
        self.assertRecordValues(book_id, [{
            'name': 'book one',
            'code': '101',
            'active': True,
            'state': 'draft',
            'published_date': fields.Date.today(),
        }])

    # def test_02(self):
    #     pass
    #
    # def test_03(self):
    #     pass
