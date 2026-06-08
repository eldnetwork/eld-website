# Eld Website

Marketing site for the [Eld](https://eld.network) decentralized ephemeral storage protocol, built with [Vite](https://vitejs.dev/) and React.

**Live site:** [https://www.eld.network](https://www.eld.network)

## Prerequisites

- [Node.js](https://nodejs.org/) >= 20

## Local development

```bash
npm install
npm start
```

This starts a local dev server at [http://localhost:5173](http://localhost:5173). Most changes reload automatically.

## Build

```bash
npm run build
```

Static output is written to the `dist/` directory.

To preview the production build locally:

```bash
npm run preview
```

## Deploy

Deployment is local-only. Copy `.env.example` to `.env`, fill in your values, then run:

```bash
./scripts/deploy.local.sh
```

To invalidate CloudFront cache without redeploying:

```bash
./scripts/invalidate.local.sh
```

Requires the AWS CLI configured with credentials that can write to the S3 bucket and invalidate the CloudFront distribution.

## Links

- [Documentation](https://docs.eld.network)
- [Block explorer](https://explorer.eld.network)
- [X / Twitter](https://x.com/eld_network)

## License

MIT — see [LICENSE](LICENSE).

Font files in `src/fonts/` are [Ioskeley Mono](https://github.com/ahatem/IoskeleyMono), licensed under the SIL Open Font License 1.1 — see [src/fonts/LICENSE](src/fonts/LICENSE).
