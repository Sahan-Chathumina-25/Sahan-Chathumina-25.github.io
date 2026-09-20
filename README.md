# Sahan-Chathumina-25.github.io (superproject)

Personal-site superproject. The live GitHub Pages site deploys from THIS repo.

- `Sahan-Frontend/` — Next.js portfolio (submodule, `Sahan-Chathumina-25/Sahan-Frontend`)
- `Sahan-Backend/` — service (submodule, `Sahan-Chathumina-25/Sahan-Backend`)

Clone with `git clone --recurse-submodules <url>` or run `git submodule update --init --recursive` after cloning.

Deploy: `.github/workflows/deploy.yml` checks out submodules, builds `Sahan-Frontend/`, and publishes `Sahan-Frontend/out` to Pages. To ship frontend changes, commit+push them in `Sahan-Frontend`, then bump the gitlink here and push.
