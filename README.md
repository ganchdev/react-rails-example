# Example Rails project with React

This is an example project which uses the `react-rails` gem with some modern JS tooling to provide a decent developer experience. React components can either be client or server side rendered, and you can install any packages on `npm`.

## Requirements:
- Ruby 3.1
- NodeJS 16 or greater
- Yarn

## Included in the project:
- [jsbundling-rails](https://github.com/rails/jsbundling-rails) - adds esbuild to Rails 
- [react-rails](https://github.com/reactjs/react-rails) - a gem that brings React, adapters and helpers for Rails
- [mini_racer](https://github.com/rubyjs/mini_racer) - server-renders components 
- [terser](https://github.com/ahorek/terser-ruby) - uglifier replacement
- [tailwindcss-rails](https://github.com/rails/tailwindcss-rails) - Tailwind CSS support in Rails
- [js-routes](https://github.com/railsware/js-routes) - use all named Rails routes in javascript
- [react-server.js](https://github.com/naft-a/react-rails-example/blob/main/vendor/javascript/react-server.js) - the compiled React js library that is used for SSR when rendering components, it can be found in the react-rails source code 

## Notes:

The overall setup feels clean and straightforward, esbuild was pretty easy to setup and required no real configuration after installing the `jsbundling-rails` gem, literally plug-and-play. I've also included Tailwind CSS in the project as an example, and on top of that I added the [Daisy UI](https://daisyui.com/) plugin to assist with the components on the example pages - all setup in the `tailwind.config.js` files. That's pretty much it!

### To get started run:
`bin/setup`

### Run all processes in development
`bin/dev`

Happy tweaking!
