#!/usr/bin/env python3
"""
Flask app with Babel and message translation
"""

from flask import Flask, render_template, request
from flask_babel import Babel, _


class Config:
    """Configuration for Flask app with Babel"""
    LANGUAGES = ["en", "fr"]
    BABEL_DEFAULT_LOCALE = "en"
    BABEL_DEFAULT_TIMEZONE = "UTC"


app = Flask(__name__)
app.config.from_object(Config)

babel = Babel(app)


@babel.localeselector
def get_locale():
    """Determine the best match for supported languages."""
    return request.accept_languages.best_match(app.config['LANGUAGES'])


@app.route('/')
def index():
    """Route for the home page"""
    return render_template('3-index.html', home_title=_('home_title'),
                           home_header=_('home_header'))


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
