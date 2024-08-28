#!/usr/bin/env python3

from flask import Flask, request, render_template
from flask_babel import Babel, _

app = Flask(__name__)
app.config['BABEL_DEFAULT_LOCALE'] = 'en'
app.config['BABEL_SUPPORTED_LOCALES'] = ['en', 'fr']
babel = Babel(app)


@babel.localeselector
def get_locale():
    locale = request.args.get('locale')
    if locale in app.config['BABEL_SUPPORTED_LOCALES']:
        return locale
    return request.accept_languages.best_match(app.config['BABEL_SUPPORTED_LOCALES'])


@app.context_processor
def inject_locale():
    """Add get_locale to the template context."""
    return dict(get_locale=get_locale)


@app.route('/')
def index():
    return render_template('4-index.html')


if __name__ == '__main__':
    app.run()
