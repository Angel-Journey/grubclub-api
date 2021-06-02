curl "http://localhost:4741/items/${ITEM_ID}" \
  --include \
  --request DELETE \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "item": {
      "potluckId": "'"${POT_ID}"'"
    }
  }'
