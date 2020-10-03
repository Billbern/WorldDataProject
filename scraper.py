import os
import json
from bs4 import BeautifulSoup

home_path = os.getcwd() + '/index.html'

with open( home_path, 'r') as f:
    content = f.read()
    data = []
    soup = BeautifulSoup(content, 'html5lib')
    
    for item in soup.findAll('path'):
        country_data = {'country': item['data-name'], 'id': item['data-id'], 'path': item['d']}
        data.append(country_data)
    
    with open('data.json', 'w') as done:
        json.dump(data, done)
