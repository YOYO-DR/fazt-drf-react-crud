import os
MYSQL = {
  'default':{
  'ENGINE':'django.db.backends.mysql',
  'NAME':os.environ.get('DBNAME'),
  'USER':os.environ.get('DBUSER'),
  'PASSWORD':os.environ.get('DBPASS'),
  'HOST':os.environ.get('DBHOST'),
  'PORT':'3306'
  }
}
