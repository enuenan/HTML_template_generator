<div style="text-align: center;">
<h2> HTML Template Generator with Tailwind CSS and Daisy UI </h2>
</div>

## Installation

1. Clone the repository
2. Command: `cd HTML_template_generator`
3. Command: `npm i`

## Commands

To start the project, run:

```bash
npm run dev
```

To build the css real time

```bash
npm run build:css
```

To build the template on real time.

```bash
npm run watch
```

\*\* You will get the templates on /templates directory

Finally if you want to get the whole template you can run

```bash
npm run build
```

## Usage

1. Common components can be written on `/src/components` directory. You can see example there already as `Head.html`
2. For the page you can create files on `/src/pages/` as `.ejs` extension
3. On the page you can include the componets as `<%- include('../components/Head.html') %>`
4. You can see the example on `/pages/index.ejs`.
5. To view the page you can do something like below on `server.js`. You can make route on your own.

```js
app.get("/", (req, res) => {
  res.render("pages/Index");
});
```
