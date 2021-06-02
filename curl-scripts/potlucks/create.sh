#!/bin/sh

API="http://localhost:4741"
URL_PATH="/potlucks"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "potluck": {
      "title": "'"${TITLE}"'",
      "location": "'"${LOCATION}"'",
      "date": "'"${DATE}"'",
      "time": "'"${TIME}"'",
      "body": "'"${BODY}"'"
    }
  }'

echo
