from flask import Flask, render_template, request, jsonify, json
from ai import generate_image
from ai import image_to_bytes
import base64
import os
from google_trans_new import google_translator


translator = google_translator()

app = Flask(__name__)

picFolder = os.path.join('static', 'images')

app.config['IMFOLDER'] = picFolder

text = ''


@app.route('/')
def index():
    return render_template('index.html')
    

@app.route('/test', methods=['GET', 'POST'])
def testfn():
    if request.method == 'POST':
        data = request.get_json()
        finaldata = data["text"]

        im, seed = generate_image(translator.translate(finaldata, lang_tgt='en'))
    
        str_eq_img = base64.b64encode(image_to_bytes(im).getvalue()).decode('UTF-8')
        img_tag = "data:image/jpg;base64," + str_eq_img + ""

        message = {'image':img_tag}
        return jsonify(message)

