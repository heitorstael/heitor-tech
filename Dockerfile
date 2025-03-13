ARG NODE_VERSION=22.14.0

FROM node:${NODE_VERSION}-slim AS base

ARG PORT=3000

WORKDIR /app

# Build
FROM base AS build

RUN corepack enable
COPY --link package.json pnpm-lock.yaml ./
RUN pnpm install --prod --frozen-lockfile

COPY --link . ./

RUN pnpm run build

# Run
FROM base

ENV PORT=$PORT
ENV NODE_ENV=production

COPY --from=build /app/.output /app/.output
# Optional, only needed if you rely on unbundled dependencies
# COPY --from=build /src/node_modules /src/node_modules

CMD [ "node", ".output/server/index.mjs" ]
