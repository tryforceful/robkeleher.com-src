## Dev Build Steps

It uses ruby & jekyll.

If `bundler` is not installed:

- `gem install bundler:2.0.2`

Then run `bundle install` which will read the Gemfile(.lock) and install the relevant bundles into `vendor/bundle` dir

`bundle exec jekyll serve` to iteratively generate on dev

## For Fontawesome

You will need to use webpack to build a js bundle that contains just the fontawesome icons we care about.

Edit `_js/fontawesome_builder.js`

Then run `npm run build`

## For Bootstrap

Install version 4.3.1 with npm or yarn, then make sure style.scss can reference it.

## To Deploy

First, build into the `_site` directory: `bundle exec jekyll build`

You can use `npx http-server` in the `_site` directory to test the build.

`deploy.sh` will run the following command: `git subtree push --prefix=_site _site gh-pages`. This will push the data from the `_site` directory into the `gh-pages` branch of the other repo (tryforceful/tryforceful.com.git), which will trigger an auto-deploy to Github Pages.
