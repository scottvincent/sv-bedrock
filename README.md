# sv-bedrock
Scott's Wordpress Site Custom Starting Point

## Prerequisites
- [MAMP](https://www.mamp.info/en/downloads/)
- Node
- Yarn
- [Composer](https://getcomposer.org/download/)

Add new local database

Copy `.env.example` file to `.env`
Copy `.htaccess.default` file to `.htaccess`

## Project Root
`composer install`

### Storybook
`yarn`
To run it: `yarn storybook`
To build it and visit at `/storybook-static/`: `yarn build-storybook`

## Theme Folder `web/app/sv-theme`
`cd web/app/themes/sv-theme`
Pull latest.
`yarn`
`yarn build`
`yarn watch`

## Setup Wordpress install
Go to `localhost/web/wp/`
