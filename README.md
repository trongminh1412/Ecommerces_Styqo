This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Server Side Rendering

# When should I use getServerSideProps?

You should use getServerSideProps only if you need to pre-render a page whose data must be fetched at request time. Time to first byte (TTFB) will be slower than getStaticProps because the server must compute the result on every request, and the result cannot be cached by a CDN without extra configuration.

## Runnning PostgreSQL database with Docker

```bash
docker run --name postgres-db -p 5432:5432 -e POSTGRES_PASSWORD=postgres -d postgres
```

## Prisma Setup

```bash
npm install @prisma/cli --save-dev

npx prisma init
```

## Prisma Migrations

```bash
npx prisma migrate dev --preview-feature
```

## Generate Prisma Client

```bash
npx prisma generate
```
