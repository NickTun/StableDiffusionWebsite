## Installing
1. Install PyTorch (https://pytorch.org/get-started/).

2. Install requirements:
  ```
  pip install -r requirements.txt
  ```
  
3. Register in Hugging Face Hub and create a token (https://huggingface.co/docs/hub/security-tokens).

4. Use the token to login in huggingface-cli:
  ```
  $ huggingface-cli login
  ```
  
5. Talk to BotFather and create a bot (https://t.me/BotFather).

6. Create a .env file with the telegram token and the safe content option (if false, explicit content will be displayed, otherwise set to true). If you have memory problems, you can lower the width and height to lower numbers, such as 448 or 320. An example of .env is the following:
  ```
  TG_TOKEN="YOUR_TOKEN_IS_HERE"
  SAFETY_CHECKER="false"
  HEIGHT="512"
  WIDTH="512"
  ```
  
7. Run the bot or website
  ```
  python bot.py | python app.py
  ```

## Credits

* [Stable Diffusion](https://github.com/CompVis/stable-diffusion)
* [Diffusers](https://github.com/huggingface/diffusers)
* [python-telegram-bot](https://github.com/python-telegram-bot/python-telegram-bot)
