curl "http://localhost:4741/items/${ITEM_ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "item": {
      "name": "'"${NAME}"'",
      "potluckId": "'"${POT_ID}"'"
    }
  }'
