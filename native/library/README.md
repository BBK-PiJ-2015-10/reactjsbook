
# To recreate

npx create-expo-app@latest library --template blank-typescript
cd library

# Then set to SDK 54 specifically
npx expo install expo@~54.0.0
npx expo install --fix

npm start

npm install @emotion/react @emotion/native


# To install data-server

npm install json-server

npx json-server --host 0.0.0.0 -p 3001 -w data.json

lsof -nP -iTCP:3001 -sTCP:LISTEN


curl -i http://192.168.1.185:3001/books
