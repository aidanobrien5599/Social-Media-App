from . import db 

class Account(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String)
    password = db.Column(db.String)
    firstName = db.Column(db.String)
    lastName = db.Column(db.String)
    age = db.Column(db.Integer)
    email = db.Column(db.String)
    