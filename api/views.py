from flask import Blueprint, jsonify, request
from . import db 
from .models import Account
import re

def is_valid_email(email):
    # Regular expression pattern for validating email addresses
    pattern = r'^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$'
    
    # Use re.match to check if the email matches the pattern
    if re.match(pattern, email):
        return True

main = Blueprint('main', __name__)

@main.route('/add_account', methods=['POST'])
def add_account():
    try:
        user_data = request.get_json()
        ##make sure all fields are filled out
        for field in user_data:
            if not field:
                return "Missing required field", 400
        
        if is_valid_email(user_data['email']) == False:
            return "Invalid email", 400
            
            
            
        
        duplicate = Account.query.filterby(username=user_data['username']).first()
        
        if not duplicate:
            new_account = Account(username=user_data['username'],password=user_data['password'],firstName=user_data['firstName'],lastName=user_data['lastName'],email=user_data['email
            db.session.add(new_movie)
            db.session.commit()
        
    except:
        print("An exception occurred:", type(error).__name__, "–", error)
        return "", 400
    return 'Done', 201
        
'''
@main.route('/get_login_info', methods=['GET'])
def movies():
    movie_list = Account.query.all()
    movies = []

    for movie in movie_list:
        movies.append({'title' : movie.title, 'rating' : movie.rating})

    return jsonify({'movies' : movies})

@main.route('/delete_movie/<string:user_name>', methods=['DELETE'])
def delete_movies(movie_title):
    movie = Account.query.filter_by(title=movie_title).first()
    if not movie:
        return 'Account not found', 404
    else:
        db.session.delete(movie)
        db.session.commit()
        return 'Done', 200
'''