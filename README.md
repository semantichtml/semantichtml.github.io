<div align="center">
<img src="https://semantichtml.github.io/icon.png" width="120"/>
<h1>Semantic HTML Website</h1>
<p>The Semantic HTML Convention Website, build with VitePress</p>
</div>

## Development
As mentioned above it's build with VitePRess, so for local development do the following:

### Load everything

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm run docs:dev
```

### Compile and Minify for Production

```sh
pnpm run docs:build
```

> [!NOTE]
> Every new commit that doesn't have `[skip actions]` or [others](https://docs.github.com/en/actions/managing-workflow-runs/skipping-workflow-runs) will be build and put on the page.
