FROM gcr.io/distroless/nodejs:debug
COPY notify.js /notify.js
ENTRYPOINT ["nodejs/bin/node", "/notify.js"]
