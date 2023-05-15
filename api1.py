import requests


# RANDOM USER API
response = requests.get('https://randomuser.me/api')

# line 5&6 are to ensure that our app is connecting to the api
print(response.status_code)
print(response.json())

gender = response.json()['results'][0]['gender']
print(gender)

title = first_name = response.json()['results'][0]['name']['title']
first_name = response.json()['results'][0]['name']['first']
last_name = response.json()['results'][0]['name']['last']

age = response.json()['results'][0]['dob']['age']

print(f'{title}.{first_name} {last_name}')
print(f'Age: {age}')


# RANDOM FOX PICTURE API
response = requests.get("http://randomfox.ca/floof")
print(response.status_code)
fox = response.json()
print(fox['image'])
print(fox['link'])


# COUNTRIES API 
base_url = 'https://restcountries.eu/rest/v2/all'
resp = requests.get(base_url)
data = resp.json()
print(type(data))

for country in data:
    print(country)
    print(type(country))
    print(country['name'] , country['capital'] , country['population'])

print("What's your name?")
user_name = input()
print("Which country do you stay in?")
user_country = input()

for country in data:
    if(country['name'].upper() == user_country.upper()): 
        print("Nice to meet you, {} !!!".format(user_name))
        print("I really like your country {} , especially your country's capital {}".format(user_country, country['capital']))
