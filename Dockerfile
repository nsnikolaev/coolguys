# syntax = docker/dockerfile:1

ARG NODE_VERSION=20.17.0
FROM node:${NODE_VERSION}-slim as base
ENV NODE_ENV=production
WORKDIR /

# Run
FROM base
CMD [ "node", ".output/server/index.mjs" ]
EXPOSE 80
