#!/usr/bin/env python

from bottle import route, static_file, view, request, default_app, run
from backend.box import start_authenticate_v2, finish_authenticate_v2, CredentialsV2, BoxClient
import os

BOX_CODE = ""

BASE_URL = "https://api.box.com/2.0/"
BOX_CLIENT_ID = "4rzspoo2yy6o9hyolo4h5qt34rvo3oly"
BOX_CLIENT_SECRET = "BbaHWdOVN52iMmTRnCVWLeMXgG4WmtXt"
AUTH_TOKEN = ""

AUTH_URL = "https://www.box.com/api/oauth2/authorize"
BOX_REDIRECT_URI = "http://0.0.0.0:5000/redirect"
credentials = None
client = None


@route('/js/<filename>')
def js_static(filename):
    return static_file(filename, root='./js')


@route('/img/<filename>')
def img_static(filename):
    return static_file(filename, root='./img')


@route('/css/<filename>')
def css_static(filename):
    return static_file(filename, root='./css')


@route('/fonts/<filename>')
def font_static(filename):
    return static_file(filename, root='./fonts')


@route('/views/<filename>')
def template_static(filename):
    return static_file(filename, root='./views')


@route("/")
@view("main")
def hello():
    print start_authenticate_v2(BOX_CLIENT_ID, redirect_uri=BOX_REDIRECT_URI)
    return dict(content="Hello from Python!")


@route("/box")
def box():
    return start_authenticate_v2(BOX_CLIENT_ID, redirect_uri=BOX_REDIRECT_URI)


@route("/redirect")
def redirect():
    BOX_CODE = request.query.code
    response = finish_authenticate_v2(BOX_CLIENT_ID, BOX_CLIENT_SECRET, BOX_CODE)
    credentials = CredentialsV2(response["access_token"], response["refresh_token"], BOX_CLIENT_ID, BOX_CLIENT_SECRET)
    global client
    client = BoxClient(credentials)
    return response


@route("/me")
def users():
    response = client.get_user_info()
    return response


@route("/folder/:folder_id")
def folder(folder_id=0):
    response = client.get_folder(folder_id)
    return response

# application = default_app()

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    run(host='0.0.0.0', port=port, debug=True)
