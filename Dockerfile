FROM node:20-alpine

WORKDIR /app

# 빌드된 결과물 복사
COPY .next/standalone ./
COPY .next/static ./.next/static
COPY public ./public

ENV NODE_ENV=production
ENV PORT=3000

EXPOSE 3000

CMD ["node", "server.js"]
