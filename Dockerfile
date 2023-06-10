FROM docker.io/lukechannings/deno
WORKDIR /app
ADD . .
RUN deno cache main.ts
ENV AUTH_PASSWORD=test
EXPOSE 8000
CMD ["run", "--allow-read", "--allow-net", "--allow-write", "--allow-env", "--unstable", "main.ts"]