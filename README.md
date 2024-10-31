# docsify-fontawesome

[FontAwesome](https://fontawesome.com/) plugin for [Docsify](https://docsify.js.org).

## Install

1. Insert FontAwesome **CSS** into docsify document (index.html)

```html
<link rel="stylesheet" href="//unpkg.com/@fortawesome/fontawesome-free/css/fontawesome.css" />
<link rel="stylesheet" href="//unpkg.com/@fortawesome/fontawesome-free/css/brands.css" />
<link rel="stylesheet" href="//unpkg.com/@fortawesome/fontawesome-free/css/regular.css" />
<link rel="stylesheet" href="//unpkg.com/@fortawesome/fontawesome-free/css/solid.css" />
```

2. Then insert script plugin into same document

```html
<script src="//unpkg.com/docsify-fontawesome/dist/docsify-fontawesome.min.js"></script>
```

## Usage

Any text inside of `:` character is processed as CSS style and converted to HTML code for [FontAwesome](https://fontawesome.com/icons), example:

```markup
:fas fa-home fa-fw:
```

This code is converted to :

```html
<i class="fas fa-home fa-fw"></i>
```

## Example

1. Run `npm run build`
1. Run `npm run example`
1. Go to [http://localhost:3000/]()

## SVG Example

View source code to understand SVG usage

1. Run `npm run build`
1. Run `npm run example-svg`
1. Go to [http://localhost:3000/]()

## License

[Apache License](LICENSE)

## TODO

- Better parser to escape code sections
