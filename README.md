# Tryggingastofnun útboð.


for cicd to work these steps must work
- npm install
- npm run build -w=web
- npm run build -w=api
- npm run start -w=web // service url is localhost:8108/tr-web
- npm run start -w=api // service url is localhost:8110/tr-api

Url on staki-cloud
https://birta.staki.is/tr-web
https://birta.staki.is/tr-api

additional steps, nice to have
- npm run format:check --workspaces
- npm run lint --workspaces
- npm run test --workspaces --if-present
