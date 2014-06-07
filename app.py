#!/usr/bin/env python

from bottle import route, static_file, view, request, default_app


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


@route("/")
@view("main")
def hello():
    return dict(content="Hello from Python!")


@route("/redirect")
def redirect():
    return str(request.query.code)

application = default_app()

# if __name__ == "__main__":
#     port = int(os.environ.get("PORT", 5000))
#     run(host='0.0.0.0', port=port, debug=True)
