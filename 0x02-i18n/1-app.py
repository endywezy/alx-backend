#!/usr/bin/env python3
"""
Flask app with Babel for i18n
"""

from flask import Flask, render_template
from flask_babel import Babel


class Config:
    """Configuration for Flask app with Babel"""
    LANGUAGES = ["en", "fr"]
    BABEL_DEFAULT_LOCALE = "en"
    BABEL_DEFAULT_TIMEZONE = "UTC"


app = Flask(__name__)
app.config.from_object(Config)

babel = Babel(app)


@app.route('/')
def index():
    """Route for the home page"""
    return render_template('1-index.html')


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
