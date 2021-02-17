# _Styled screenshots_

[![GitHub marketplace](https://img.shields.io/badge/marketplacegithub--web-screenshots-blue?logo=github)](https://github.com/marketplace/actions/web-screenshots)

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

## _Table of contents_

<!--ts-->
   * [<em>Styled screenshots</em>](#styled-screenshots)
      * [<em>Table of contents</em>](#table-of-contents)
      * [<em>Description</em>](#description)
      * [<em>Inputs</em>](#inputs)
         * [url](#url)
         * [name](#name)
         * [path](#path)
         * [extension](#extension)
         * [encoding](#encoding)
         * [fullPage](#fullpage)
         * [width](#width)
         * [height](#height)
      * [<em>Outputs</em>](#outputs)
         * [image](#image)
      * [<em>Examples</em>](#examples)
      * [<em>Visitor stats</em>](#visitor-stats)
      * [<em>Licensing</em>](#licensing)
      * [<em>Authors</em>](#authors)
      * [<em>Versioning</em>](#versioning)
      * [<em>Contribution</em>](#contribution)
      * [<em>Acknowledgement</em>](#acknowledgement)
      * [<em>Forks</em>](#forks)
<!--te-->

## _Description_

<p align="center" style="text-align:center;">
    <a href="https://www.typescriptlang.org/">
        <img src="https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" alt="JavaScript" />
    </a>
    <a href="https://www.repostatus.org/#active">
        <img src="https://img.shields.io/badge/Project%20Status-Active-brightgreen" alt="Project Status: Active – The project has reached a stable, usable state and is being actively developed." />
    </a>
    <a href="https://badges.pufler.dev">
        <img src="https://badges.pufler.dev/created/AlexRogalskiy/github-action-screenshots" alt="Project created status" />
    </a>
    <a href="https://badges.pufler.dev">
        <img src="https://badges.pufler.dev/updated/AlexRogalskiy/github-action-screenshots" alt="Project updated status" />
    </a>
</p>

Creates screenshots by input json data source and dimension parameters.

## _Inputs_

### `url`

**Required** Target url to create a screenshot from.

### `name`

**Optional** Screenshot image name (default **screenshot**)

### `path`

**Optional** Screenshot image path (default **images**)

### `extension`

**Optional** Screenshot image extension (default **png**)

### `encoding`

**Optional** Screenshot image encoding (default **binary**)

### `fullPage`

**Optional** Screenshot image with a full-page view (default **false**)

### `width`

**Optional** Screenshot image width (default **1024**)

### `height`

**Optional** Screenshot image height (default **768**)

## _Outputs_

### `image`

Generated screenshot image (stored in the `path` directory)

## _Examples_

```yml
- name: Create screenshots
  uses: alexrogalskiy/github-action-screenshots@master
  with:
    url: 'https://www.google.com/'
    name: 'screenshot'
    path: 'images'
    extension: 'png'
    encoding: 'binary'
    fullPage: false
    width: 400
    height: 400
```

Running locally:

- `npm run start:action --action github-action-screenshots --url 'https://www.google.com/' --name screenshot-name --extension png --width 400 --height 400`

## _Visitor stats_

[![GitHub page hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2FAlexRogalskiy%2Fgithub-action-screenshots&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=true)](https://hits.seeyoufarm.com)

![GitHub stars](https://img.shields.io/github/stars/AlexRogalskiy/github-action-screenshots?style=social)
![GitHub forks](https://img.shields.io/github/forks/AlexRogalskiy/github-action-screenshots?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/AlexRogalskiy/github-action-screenshots?style=social)

## _Licensing_

_**Styled Screenshots**_ is distributed under LGPL version 3 or later,
[[License](https://github.com/AlexRogalskiy/github-action-screenshots/blob/master/LICENSE)]. LGPLv3 is
additional permissions on top of GPLv3.

![license](https://user-images.githubusercontent.com/19885116/48661948-6cf97e80-ea7a-11e8-97e7-b45332a13e49.png)

## _Authors_

_**Styled Screenshots**_ is maintained by the following GitHub team-members:

- [![Author](https://img.shields.io/badge/author-AlexRogalskiy-FB8F0A)](https://github.com/AlexRogalskiy)

with community support please contact with us if you have some question or proposition.

## _Versioning_

The project uses [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on
this repository][tags].

## _Contribution_

[![Contributors Display](https://badges.pufler.dev/contributors/AlexRogalskiy/github-action-screenshots?size=50&padding=5&bots=true)](https://badges.pufler.dev)

Please read
[CONTRIBUTING.md](https://github.com/AlexRogalskiy/github-action-screenshots/blob/master/.github/CONTRIBUTING.md)
for details on our code of conduct, and the process for submitting pull requests to us
([emoji key](https://allcontributors.org/docs/en/emoji-key)).

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors)
specification. Contributions of any kind are welcome!

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
![Github contributors](https://img.shields.io/github/all-contributors/AlexRogalskiy/github-action-screenshots)

See also the list of [contributors][contributors] who participated in this project.

## _Acknowledgement_

[![Stargazers repo roster for @AlexRogalskiy/github-action-screenshots](https://reporoster.com/stars/AlexRogalskiy/github-action-screenshots)][stars]

## _Forks_

[![Forkers repo roster for @AlexRogalskiy/github-action-screenshots](https://reporoster.com/forks/AlexRogalskiy/github-action-screenshots)][forkers]

[repo]: https://github.com/AlexRogalskiy/github-action-screenshots
[tags]: https://github.com/AlexRogalskiy/github-action-screenshots/tags
[issues]: https://github.com/AlexRogalskiy/github-action-screenshots/issues
[pulls]: https://github.com/AlexRogalskiy/github-action-screenshots/pulls
[wiki]: https://github.com/AlexRogalskiy/github-action-screenshots/wiki
[stars]: https://github.com/AlexRogalskiy/github-action-screenshots/stargazers
[forkers]: https://github.com/AlexRogalskiy/github-action-screenshots/network/members
[contributors]: https://github.com/AlexRogalskiy/github-action-screenshots/graphs/contributors
[license_id]: https://img.shields.io/github/license/AlexRogalskiy/github-action-screenshots
[license_content]: https://github.com/AlexRogalskiy/github-action-screenshots/blob/master/LICENSE
[total_usages]:
  https://img.shields.io/endpoint?url=https%3A%2F%2Fapi-git-master.endbug.vercel.app%2Fapi%2Fgithub-actions%2Fused-by%3Faction%3DAlexRogalskiy%2Fgithub-action-screenshots%26badge%3Dtrue
[search_results]:
  https://github.com/search?o=desc&q=AlexRogalskiy/github-action-screenshots+path%3A.github%2Fworkflows+language%3AYAML&s=&type=Code
