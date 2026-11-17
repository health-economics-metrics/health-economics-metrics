# Contributing to Health Economics Metrics

Thanks for helping improve this project.

## Ways to contribute

- **Report a problem:** open an issue describing what is wrong, unclear, or missing.
- **Fix or improve something:** open a pull request. Small fixes can go straight to a pull request; for larger changes, please open an issue first so we can agree on the approach.

## Layout

- `locales/en-gb-oxendict/topics/<slug>/index.md`: the canonical topics. `README.md` is the categorized index of all topics.
- Other locales live in `locales/<locale>/`; each topic directory carries a `.locale-peer-id` that must match across locales.
- `spec/`: the specifications. Read them before changing behaviour.
- `health-economics-metrics.github.io/`: the SvelteKit reading site. `content/` there is a vendored copy refreshed by `pnpm sync:content`.

## Checks

```sh
sh bin/test    # locale names, peer ids, topic sets, README symlinks, cross-links
cd health-economics-metrics.github.io && pnpm install && pnpm sync:content && pnpm build
```

AI agents should also read [AGENTS.md](AGENTS.md).

## Code of conduct

Participation is governed by our [Code of Conduct](CODE_OF_CONDUCT.md).

## License

By contributing, you agree that your contribution is offered under the terms in [LICENSE.md](LICENSE.md).
