FROM docker.io/lukechannings/deno
USER deno
EXPOSE 8000
WORKDIR /app
ADD . .
RUN deno cache main.js
ENV AUTH_PASSWORD=test
CMD ["run", "--allow-read", "--allow-net", "--allow-write", "--allow-env", "--unstable", "main.js"]