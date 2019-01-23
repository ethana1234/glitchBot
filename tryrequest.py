
# Install the Python Requests library:
# `pip install requests`

import base64
import requests


def send_request():
    # Request

    try:
        response = requests.get(
            url={"https://api.mysportsfeeds.com/v1.1/pull/nfl/2018-regular/daily_game_schedule.xml?fordate=20181014"},
            headers={
                "Authorization": "Basic ZWIxN2RjZDgtMjA0ZS00Y2UyLTg4MzAtMzUxOTVhOmV0aGFuYTMz"
            }
        )
        print('Response HTTP Status Code: {status_code}'.format(
            status_code=response.status_code))
        print('Response HTTP Response Body: {content}'.format(
            content=response.content))
    except requests.exceptions.RequestException:
        print('HTTP Request failed')


send_request()
print('end')
