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

def is_valid_password(username):
    # Regular expression pattern to validate the username
    pattern = r'^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+{}|:"<>?`\-=[\];\',./]).{8,20}$'  
    # Use re.match to check if the username matches the pattern
    if re.match(pattern, username):
        return True
    else:
        return False


main = Blueprint('main', __name__)

@main.route('/add_account', methods=['POST'])
def add_account():
    try:
        user_data = request.get_json()
        ##make sure all fields are filled out
        for field in user_data:
            if not field:
                return "Missing required field", 400
        #run if valid email function
        if is_valid_email(user_data['email']) == False:
            return "Invalid email", 400
        ## make sure it is a valid password
        if is_valid_password(user_data['password']) == False:
            return "Invalid Password: Must include 8-20 characters, and at least one number, capital letter, lowercase letter, and special character", 400
        
              
        duplicateUsername = Account.query.filter_by(username=user_data['username']).first()
        duplicateEmail = Account.query.filter_by(email=user_data['email']).first()
        
        if duplicateUsername:
            return "Account already exists with this username", 400
        
        if duplicateEmail:
            return "Account already exists with this email", 400
        #all tests passed email is valid
        new_account = new_account = Account(
    username=user_data['username'],
    password=user_data['password'],
    firstName=user_data['firstName'],
    lastName=user_data['lastName'],
    email=user_data['email'],
    age=user_data['age'])
        
        db.session.add(new_account)
        db.session.commit()
        
        
    except KeyError as key_error:
        print("KeyError occurred:", key_error)
        return "", 400
    except ValueError as value_error:
        print("ValueError occurred:", value_error)
        return "", 400
    except Exception as e:
        print("An exception occurred:", type(e).__name__, "–", e)
        return "An error occurred", 400 
    return 'Done', 201
        
@main.route('/get_account/<string:username>', methods=['GET'])
def get_account(username):
    try:
        account = Account.query.filter_by(username=username).first()
        if not account:
            'Username is not connected to an account', 404

        return jsonify({
            "username" : account.username, 
            "password": account.password, 
            "email" : account.email, 
            "firstName" : account.firstName, 
            "lastName": account.lastName,
            "age": account.age
        }) 
    except Exception as e:
        return "Invalid username, please try again", 400
   
    
@main.route('/get_all_accounts', methods=['GET'])
def get_all_accounts():
    account_list = Account.query.all()
    accounts = []
    
    for account in account_list:
        accounts.append({
        "username" : account.username, 
        "password": account.password, 
        "email" : account.email, 
        "firstName" : account.firstName, 
        "lastName": account.firstName,
        "age": account.age
        })

    return jsonify({ 'accounts': accounts})

@main.route('/delete_account/<string:username>', methods=['DELETE'])
def delete_get_accounts(username):
    account = Account.query.filter_by(username=username).first()
    if not account:
        return 'Account not found', 404
    else:
        db.session.delete(account)
        db.session.commit()
        return 'Done', 200
    
@main.route('/update_account/<string:username>', methods=['PATCH'])
def update_account(username):
    try:
        account = Account.query.filter_by(username=username).first()
        if not account:
            return 'Account not found', 404
        else:
            new_data = request.get_json()
            
            # Check for valid username
            if 'username' in new_data and new_data['username'] != username:
                duplicate_username = Account.query.filter_by(username=new_data['username']).first()
                if duplicate_username:
                    return "Account already exists with this username", 400
            
            # Check to make sure valid email
            if 'email' in new_data and new_data['email'] != account.email:
                duplicate_email = Account.query.filter_by(email=new_data['email']).first()
                if duplicate_email:
                    return "Account already exists with this email", 400
                if not is_valid_email(new_data['email']):
                    return "Invalid email", 400
            
            # Update fields
            for key, value in new_data.items():
                if key == 'password':
                    if not is_valid_password(value):
                        return "Invalid Password: Must include 8-20 characters, and at least one number, capital letter, lowercase letter, and special character", 400
                    account.password = value
                elif key == 'email':
                    account.email = value
                elif key == 'username':
                    account.username = value
                elif key == 'age':
                    account.age = value
                elif key == 'firstName':
                    account.firstName = value
                elif key == 'lastName':
                    account.lastName = value
                # Add other fields to update as needed
            
            # Commit changes to the database
            db.session.commit()
    except KeyError as key_error:
        print("KeyError occurred:", key_error)
        return "", 400
    except ValueError as value_error:
        print("ValueError occurred:", value_error)
        return "", 400
    except Exception as e:
        print("An exception occurred:", type(e).__name__, "–", e)
        return "An error occurred", 400 
        
    return 'Account updated successfully', 200
        
                    
                    
                
        