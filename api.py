import os
import sys
import lexnlp.extract.en.citations
from flask import Flask, jsonify, request, send_from_directory

ROOT_PATH = os.path.dirname(os.path.realpath(__file__))
DIST_PATH = os.path.join(ROOT_PATH, 'client', 'build')

app = Flask(__name__, static_url_path=DIST_PATH)


@app.route('/')
def index():
    return send_from_directory(DIST_PATH, 'index.html')


@app.route('/<path:path>')
def static_files(path):
    return send_from_directory(DIST_PATH, path)


@app.route('/api/citations', methods=['POST'])
def api_citations():
    text = request.get_json()['text']
    return jsonify(list(lexnlp.extract.en.citations.get_citations(text, as_dict=True)))


if __name__ == '__main__':
    app.run(host="0.0.0.0")
