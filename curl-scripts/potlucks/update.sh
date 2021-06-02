#!/bin/bash

API="http://localhost:4741"
URL_PATH="/potlucks"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "potluck": {
      "title": "'"${TITLE}"'",
      "location": "'"${LOCATION}"'",
      "date": "'"${DATE}"'",
      "body": "'"${BODY}"'"
    }
  }'

echo
