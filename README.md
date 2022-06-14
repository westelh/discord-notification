# discord-notification
Small notification app for my discord channel. 
Using [Discord Webhook](https://support.discord.com/hc/ja/articles/228383668-タイトル-Webhooksへの序章), 
This app can send messages to your dedicated channels.

`docker run --rm -e HOSTNAME="my laptop" -e APIPATH=/api/webhooks/xxxxxxxxxxxx ghcr.io/westelh/discord-notification:latest "Hello World!"`
