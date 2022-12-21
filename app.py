from flask import Flask, render_template, request, jsonify, json
from bot import generate_image
from bot import image_to_bytes
import base64
import os
import jinja2
from google_trans_new import google_translator


translator = google_translator()

app = Flask(__name__)

picFolder = os.path.join('static', 'images')

app.config['IMFOLDER'] = picFolder

text = ''


@app.route('/')
def index():
    return render_template('index.html')

# @app.route("/gen", methods=['POST'])
# def gen():
#     if request.method == 'POST':
#         text = request.form["description"]
#         return 200
    

@app.route('/test', methods=['GET', 'POST'])
def testfn():
    if request.method == 'POST':
        data = request.get_json()
        finaldata = data["text"]

        print(finaldata)
        im, seed = generate_image(translator.translate(finaldata, lang_tgt='en'))
    
        str_eq_img = base64.b64encode(image_to_bytes(im).getvalue()).decode('UTF-8')
        img_tag = "data:image/jpg;base64," + str_eq_img + ""

        message = {'image':img_tag}
        return jsonify(message)

