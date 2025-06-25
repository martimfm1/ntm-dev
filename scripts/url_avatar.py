import requests
import os
from dotenv import load_dotenv

load_dotenv()

BOT_TOKEN = os.getenv('Token_bot')
USER_ID = int(input('Id - '))

def get_user_avatar(user_id):
    headers = {
        "Authorization": f"Bot {BOT_TOKEN}"
    }

    response = requests.get(f"https://discord.com/api/users/{user_id}", headers=headers)

    if response.status_code != 200:
        print("Erro ao obter utilizador:", response.status_code, response.text)
        return None

    user = response.json()
    avatar_hash = user.get("avatar")
    discriminator = user.get("discriminator")

    if avatar_hash:
        avatar_url = f"https://cdn.discordapp.com/avatars/{user_id}/{avatar_hash}.png"
    else:
        avatar_url = f"https://cdn.discordapp.com/embed/avatars/{int(discriminator) % 5}.png"

    return avatar_url

# Exemplo de uso
avatar = get_user_avatar(USER_ID)
print("Avatar URL:", avatar)