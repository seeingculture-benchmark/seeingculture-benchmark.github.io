# Seeing Culture Benchmark: project page

Project website for **Seeing Culture: A Benchmark for Visual Reasoning and Grounding** (EMNLP 2025 Main Conference).

- Live site: https://seeingculture-benchmark.github.io/
- Paper: https://aclanthology.org/2025.emnlp-main.1131/
- Code: https://github.com/buraksatar/seeingculture
- Dataset: https://huggingface.co/datasets/Multimedia-SMU/seeingculture-benchmark

## Updating the leaderboard

Leaderboard rows live in `data/leaderboard.js`. To add an externally submitted result, append a row object there and open a pull request (or the maintainer pastes it in from an emailed result JSON). The table renders and sorts client side; no build step.

## Structure

- `index.html`: the whole page (Bulma, no build step)
- `visualizer/`: the interactive dataset explorer (`explore.html`), loading samples from `visualizer/data/data_public.js`
- `static/images/`: figures (compressed WebP). `teaser-white.png` is not used by the page but is linked by the Hugging Face dataset card and the code README; keep it.
- Icons: inline SVG symbols at the top of `index.html`, from Font Awesome Free 5.15.1 (CC BY 4.0) and the Academicons arXiv glyph (SIL OFL 1.1); no icon script or icon font is loaded

## Website license

This site is adapted from the [Nerfies](https://nerfies.github.io) and [MathVista](https://mathvista.github.io) templates and is licensed under a
[Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/).
