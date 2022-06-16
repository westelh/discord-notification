FROM gcr.io/distroless/nodejs:18
COPY notify.js /notify.js
ENTRYPOINT ["nodejs/bin/node", "/notify.js"]
