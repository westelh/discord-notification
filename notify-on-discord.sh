#! /bin/sh
MSG=$1
POST=$(cat << EOS
{
  "username": "notify-on-discord.sh",
  "content": "${MSG}"
}
EOS
)

echo "$POST"

curl -H "Accept: application/json" -H "Content-type: application/json" -X POST -d "$POST" "$HOOK"
