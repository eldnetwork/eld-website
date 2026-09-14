# Eld Website

![Node](https://img.shields.io/badge/node-%3E%3D20-339933?logo=nodedotjs&logoColor=white)
![React](https://img.shields.io/badge/react-18-61DAFB?logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/vite-5-646CFF?logo=vite&logoColor=white)
[![License](https://img.shields.io/badge/license-MIT-blue)](LICENSE)
[![CI](https://github.com/eldnetwork/eld-website/actions/workflows/ci.yml/badge.svg)](https://github.com/eldnetwork/eld-website/actions/workflows/ci.yml)
[![Website](https://img.shields.io/website?url=https%3A%2F%2Fwww.eld.network)](https://www.eld.network)
[![Stars](https://img.shields.io/github/stars/eldnetwork/eld-website)](https://github.com/eldnetwork/eld-website/stargazers)

Marketing site for the [Eld](https://www.eld.network) decentralized ephemeral storage protocol, built with [Vite](https://vitejs.dev/) and React.

This repository is the public marketing site only — not the Eld protocol, node software, or SDKs. For protocol docs, see [Documentation](https://docs.eld.network).

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

## CI

```bash
npm run ci
```

Runs format check, lint, tests, audit, and production build.

## Releasing

Merges to `main` (and work on feature branches) do **not** deploy the live site. Production updates are gated by version tags and GitHub Releases:

1. Land the changes on `main` and wait for [CI](https://github.com/eldnetwork/eld-website/actions/workflows/ci.yml) to pass.
2. Align `package.json` `"version"` with the release (e.g. `1.2.3`), then create and push a semver tag from that commit:

   ```bash
   git checkout main
   git pull
   git tag v1.2.3
   git push origin v1.2.3
   ```

3. Pushing the tag runs the **Draft release** workflow, which opens a **draft** GitHub Release (with generated notes). Nothing is deployed yet.
4. Review the draft under [Releases](https://github.com/eldnetwork/eld-website/releases), edit notes if needed, then **Publish release**.
5. Publishing triggers the **Deploy production** workflow, which builds the tagged commit and updates [www.eld.network](https://www.eld.network).

Only tags matching `v*.*.*` (for example `v1.2.3`) participate in this flow. Tags must point at a commit that is on `main`.

## Links

- [Documentation](https://docs.eld.network)
- [Block explorer](https://explorer.eld.network)
- [X / Twitter](https://x.com/eld_network)

## License

MIT — see [LICENSE](LICENSE).

Font files in `src/fonts/` are [Ioskeley Mono](https://github.com/ahatem/IoskeleyMono), licensed under the SIL Open Font License 1.1 — see [src/fonts/LICENSE](src/fonts/LICENSE).
