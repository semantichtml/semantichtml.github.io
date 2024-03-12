<div align="center">
<img src="https://semantichtml.github.io/icon.png" width="120"/>
<h1>Semantic HTML Website</h1>
<p>The Semantic HTML Convention Website, build with VitePress and Aplós</p>
</div>

## Development
As mentioned above it's build with VitePress, so for local development do the following:

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
> Any new commit that does not include `[skip actions]` and [other](https://docs.github.com/en/actions/managing-workflow-runs/skipping-workflow-runs) specified conditions will trigger a build and update the page.