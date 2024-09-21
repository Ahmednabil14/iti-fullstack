{
    "name": "Library App",
    "summary": "",
    "description": """ """,
    "author": "Muhammed Nasser",
    "category": "",
    "version": "17.0.0.1.0",
    "depends": ['base', 'mail', 'sale'],
    "application": True,
    "data": [
        'security/group.xml',
        'security/ir.model.access.csv',
        'data/sequence.xml',
        'data/cron.xml',
        'views/base_menus.xml',
        'views/book_view.xml',
        'views/publisher_view.xml',
        'views/sale_order.xml',
        'wizard/add_publisher_wizard_view.xml',
        'report/book_print.xml',
    ]
}