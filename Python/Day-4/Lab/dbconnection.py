import psycopg2
import sys
host = 'localhost'
user = 'osos'
passw = '123'
dbname = 'iti'

def connect():
    try:
        conn = psycopg2.connect(
            host=host,
            user=user,
            password=passw,
            dbname=dbname,
            port="5432")
        return conn
    except:
        print(sys.exc_info())
    return None

def insert(table_name, **kwargs):
    conn = connect()
    cur = conn.cursor()
    columns = ', '.join(kwargs.keys())
    values = ', '.join(['%s'] * len(kwargs))
    cur.execute('insert into {} ({}) values({})'.format(table_name, columns, values), tuple(kwargs.values()))
    conn.commit()
    cur.close()
    conn.close()


def select(table_name):
    conn = connect()
    cur = conn.cursor()
    cur.execute('select * from {}'.format(table_name))
    data = cur.fetchall()
    for row in data:
        print(row)
    cur.close()
    conn.close()

def updete(table_name, id, id_column, **kwargs):
    conn = connect()
    cur = conn.cursor()
    for key, value in kwargs.items():
        cur.execute('update {} set {} = %s where {} = %s'.format(table_name
                                                                 , key, id_column), (value, id))
        conn.commit()
    cur.close()
    conn.close()

def delete(table_name, id, id_column):
    conn = connect()
    cur = conn.cursor()
    cur.execute('delete from {} where {} = %s'.format(table_name, id_column), (id,))
    conn.commit()
    cur.close()