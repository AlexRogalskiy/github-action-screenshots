# Styled screenshots

[![GitHub marketplace](https://img.shields.io/badge/marketplacegithub--screenshots-blue?logo=github)](https://github.com/marketplace/actions/graph-screenshot)

[![management: perfekt👌](https://img.shields.io/badge/management-perfekt👌-red.svg)](https://github.com/lekterable/perfekt)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

<!-- [![Become a sponsor](https://img.shields.io/badge/sponsor-AlexRogalskiy-181717.svg?logo=github)](https://github.com/sponsors/AlexRogalskiy)-->

[![DeepScan grade](https://deepscan.io/api/teams/11946/projects/15929/branches/326929/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=11946&pid=15929&bid=326929)
![GitHub tag (latest by date)](https://img.shields.io/github/v/tag/AlexRogalskiy/github-action-screenshots)
![GitHub Release Date](https://img.shields.io/github/release-date/AlexRogalskiy/github-action-screenshots)
![Lines of code](https://tokei.rs/b1/github/AlexRogalskiy/github-action-screenshots?category=lines)
![GitHub closed issues](https://img.shields.io/github/issues-closed/AlexRogalskiy/github-action-screenshots)
![GitHub closed pull requests](https://img.shields.io/github/issues-pr-closed/AlexRogalskiy/github-action-screenshots)
![GitHub repo size](https://img.shields.io/github/repo-size/AlexRogalskiy/github-action-screenshots)
![GitHub last commit](https://img.shields.io/github/last-commit/AlexRogalskiy/github-action-screenshots)
![GitHub language count](https://img.shields.io/github/languages/count/AlexRogalskiy/github-action-screenshots)
![GitHub search hit counter](https://img.shields.io/github/search/AlexRogalskiy/github-action-screenshots/goto)
![GitHub Repository branches](https://badgen.net/github/branches/AlexRogalskiy/github-action-screenshots)
![GitHub Repository dependents](https://badgen.net/github/dependents-repo/AlexRogalskiy/github-action-screenshots)
[![Dependabot](https://img.shields.io/badge/dependabot-enabled-1f8ceb.svg?style=flat-square)](https://dependabot.com/)
[![NewReleases](https://newreleases.io/badge.svg)](https://newreleases.io/github/AlexRogalskiy/github-action-screenshots)
[![Hits-of-Code](https://hitsofcode.com/github/alexrogalskiy/github-action-screenshots?branch=master)](https://hitsofcode.com/github/alexrogalskiy/github-action-screenshots?branch=master/view?branch=master)
![CI](https://github.com/AlexRogalskiy/github-action-screenshots/workflows/CI/badge.svg)

<!--[![codecov](https://codecov.io/gh/AlexRogalskiy/github-action-screenshots/branch/master/graph/badge.svg)](https://codecov.io/gh/AlexRogalskiy/github-action-screenshot)-->

[![ComVer](https://img.shields.io/badge/ComVer-compliant-brightgreen.svg)][repo]
[![Public workflows that use this action.][total_usages]][search_results]
[![Licence][license_id]][license_content]

## Description

Creates screenshots by input json data source and dimension parameters.

## Inputs

### `url`

**Required** Target url to create a screenshot from.

### `name`

**Optional** Screenshot image name (default **screenshot**)

### `path`

**Optional** Screenshot image path (default **images**)

### `extension`

**Optional** Screenshot image extension (default **png**)

### `width`

**Optional** Screenshot image width (default **1024**)

### `height`

**Optional** Screenshot image height (default **768**)

## Outputs

### `images`

Generated screenshot image (stored in the root directory)

## Examples

```yml
- name: Create screenshots
  uses: alexrogalskiy/github-action-screenshots@master
  with:
    url: 'https://www.google.com/'
    name: 'screenshot'
    path: 'images'
    extension: 'png'
    width: 400
    height: 400
```

Running locally:

- `npm run start:action --action github-action-screenshots --url 'https://raw.githubusercontent.com/plotly/plotly.js/master/test/image/mocks/0.json' --name screenshot-name --extension png --width 400 --height 400`

## <img src="https://user-images.githubusercontent.com/18126719/56791599-0868f980-683a-11e9-8a8b-134ced040c8e.png" width="30" height="30"> _Star Gazers_

[![Stargazers repo roster for @AlexRogalskiy/github-action-screenshots](https://reporoster.com/stars/AlexRogalskiy/github-action-screenshots)](https://github.com/AlexRogalskiy/github-action-screenshots/stargazers)

## <img src="https://ghost.org/images/docs/setup/fork.gif" width="30" height="30"> _Forkers_

[![Forkers repo roster for @AlexRogalskiy/github-action-screenshots](https://reporoster.com/forks/AlexRogalskiy/github-action-screenshots)](https://github.com/AlexRogalskiy/github-action-screenshots/network/members)

[repo]: https://github.com/AlexRogalskiy/github-action-screenshots
[total_usages]: https://img.shields.io/endpoint?url=https%3A%2F%2Fapi-git-master.endbug.vercel.app%2Fapi%2Fgithub-actions%2Fused-by%3Faction%3DAlexRogalskiy%2Fgithub-action-screenshots%26badge%3Dtrue
[search_results]: https://github.com/search?o=desc&q=AlexRogalskiy/github-action-screenshots+path%3A.github%2Fworkflows+language%3AYAML&s=&type=Code
[license_id]: https://img.shields.io/github/license/AlexRogalskiy/github-action-screenshots
[license_content]: https://github.com/AlexRogalskiy/github-action-screenshots/blob/master/LICENSE
