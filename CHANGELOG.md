# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [1.2.0](https://github.com/kimael-code/maikel-dev/compare/v1.1.0...v1.2.0) (2026-02-05)


### Features

* integrate CuentaCasos project and open project links in new tab ([b6ed8ae](https://github.com/kimael-code/maikel-dev/commit/b6ed8ae958f7f8ac90e7fd43d2113125f9908a57))


### Bug Fixes

* **theme:** use media queries for theme-color to fix PWA dark mode ([a4ad432](https://github.com/kimael-code/maikel-dev/commit/a4ad432af34fcc2815fe507238d4540f0d232a51))
* **ui:** add active state for stack icons on mobile ([c3bf0a0](https://github.com/kimael-code/maikel-dev/commit/c3bf0a08975a4a23c842defe4f15a3deb2aa5aa5))

## [1.1.0](https://github.com/kimael-code/maikel-dev/compare/v1.0.0...v1.1.0) (2026-01-20)


### Features

* **theme:** customize accent color to lime and sync browser theme color ([c9c187e](https://github.com/kimael-code/maikel-dev/commit/c9c187e5a3682029fbe6153f34c7464aee321840))

## [1.0.0](https://github.com/kimael-code/maikel-dev/compare/v0.0.1...v1.0.0) (2026-01-20)

### 0.0.1 (2026-01-19)


### Features

* add baseURL to app configuration ([fe8ff48](https://github.com/kimael-code/maikel-dev/commit/fe8ff4881e85c485080e1ae732083d0ba7fb68bb))
* change twitter card style to player ([b06b202](https://github.com/kimael-code/maikel-dev/commit/b06b2020b13fcccff2794bf248e4c152aadf7004))
* **content:** add new projects and optimize images to AVIF ([6c55039](https://github.com/kimael-code/maikel-dev/commit/6c55039ee610205219086bffa4a6da96e8a82590))
* **copy:** integrate SDD/Agentic AI narrative and refine CTAs ([4e79aee](https://github.com/kimael-code/maikel-dev/commit/4e79aee1fe659fee1dbe86dc074e98e5e42f90a9))
* implement translations ([0071e68](https://github.com/kimael-code/maikel-dev/commit/0071e68551c4c9e70dea71587c5249ccad7cb68a))
* **ui:** unify architecture and optimize homepage layout ([b3b5ec6](https://github.com/kimael-code/maikel-dev/commit/b3b5ec605989811a11806a8f4d7b8485eb27e8a9))


### Bug Fixes

* add locale watch to async data fetching in about, index, and projects pages ([3b11937](https://github.com/kimael-code/maikel-dev/commit/3b11937f16deb74dc3bfe1bb64755b349f5a0bc5))
* add missing trailing slash to baseUrl and baseURL in nuxt.config.ts ([0b96cd9](https://github.com/kimael-code/maikel-dev/commit/0b96cd918196d8ae6e447f2907948666c5959831))
* add missing translation for "Not available at the moment" in English and Spanish locales ([85d1148](https://github.com/kimael-code/maikel-dev/commit/85d1148d3245dcddc25faccc4871368c8eeb194f))
* add transition effects for page navigation ([b9da053](https://github.com/kimael-code/maikel-dev/commit/b9da053979681ee99cee08e1f479fa1edebd33bc))
* Adjust prerender settings to handle root path dynamically ([d865218](https://github.com/kimael-code/maikel-dev/commit/d86521831107f9dcc33dfa6e1b4e78e4a4403927))
* Always enable redirection in i18n settings ([2a82612](https://github.com/kimael-code/maikel-dev/commit/2a82612e9123bd80f10ecb7994beb727d7eebd4b))
* comment out browser language detection settings and remove unnecessary prerender hooks ([2758da0](https://github.com/kimael-code/maikel-dev/commit/2758da0d02bfbf0f198372cba4335bff933d85db))
* correct typos in the "About Me" section and update the professor's title ([f1a3417](https://github.com/kimael-code/maikel-dev/commit/f1a34172507ddc3d7c009fe74f8f320a6e8d0020))
* desactivar la detección del idioma del navegador en la configuración de i18n ([cf23074](https://github.com/kimael-code/maikel-dev/commit/cf230744f4f1d5b107b34f695428ba03e3e63e03))
* eliminar funciones innecesarias en useSeoMeta para simplificar la asignación de metadatos ([21c3472](https://github.com/kimael-code/maikel-dev/commit/21c347265fd18e906f347013eede51ca71dc4c18))
* enable browser language detection with cookie settings ([bedffc5](https://github.com/kimael-code/maikel-dev/commit/bedffc57a26772cc54c8f73743b2cc839ba7f476))
* prerender routes ([23cf9fc](https://github.com/kimael-code/maikel-dev/commit/23cf9fcac31dacf89bdac3a8493b175cc8cc12e7))
* remove baseUrl configuration and refactor prerender hooks for route generation ([db60e21](https://github.com/kimael-code/maikel-dev/commit/db60e21d0a2753e66e503576f2f52ac64ec292fc))
* remove baseUrl from i18n configuration in nuxt.config.ts ([0821b37](https://github.com/kimael-code/maikel-dev/commit/0821b37cb6aefee7f8d2f3c4c2471913f38e757e))
* remove duplicate baseUrl configuration in nuxt.config.ts ([a612a70](https://github.com/kimael-code/maikel-dev/commit/a612a7053e0dbbe6022f8285c7d646ee47420d75))
* remove trailing slash from baseUrl in nuxt.config.ts ([3f4b4a6](https://github.com/kimael-code/maikel-dev/commit/3f4b4a66d644fb6dfcb018ffd29e6a85e68fe674))
* remove unnecessary local import and simplify the UApp component ([21a786a](https://github.com/kimael-code/maikel-dev/commit/21a786a14db661e62e7fe616f54a913a6922e473))
* **repo:** add missing version field for standard-version ([d06a4e8](https://github.com/kimael-code/maikel-dev/commit/d06a4e887c4cbf93ad5b0013444b89301df2350a))
* simplify titleTemplate assignment in useSeoMeta ([68e476e](https://github.com/kimael-code/maikel-dev/commit/68e476e7a87ad753a3fe7078c2782b3f04de6965))
* update async data fetching to include locale in about and projects pages ([f560559](https://github.com/kimael-code/maikel-dev/commit/f56055940c6beef1549e77d97156a7e1b1dd781b))
* update locale change handling in AppHeader component ([8586550](https://github.com/kimael-code/maikel-dev/commit/8586550b33c9563f4be2d01fbce46c3e2b9722aa))
* update SEO meta properties to use functions for dynamic title and description handling ([066f320](https://github.com/kimael-code/maikel-dev/commit/066f320426fd309507a8a6b981d0b7cd013e4667))
* wrap MDC component in Motion for enhanced animation effects ([1e8ee15](https://github.com/kimael-code/maikel-dev/commit/1e8ee15a39066e8ecc8a4a3ea964f4b8326052e9))
