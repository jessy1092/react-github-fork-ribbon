React GitHub Fork Ribbon
=============
[![npm][npm-image]][npm-url] [![Dependency Status][david-dm-image]][david-dm-url]

Pure inline style github fork ribbon on React component. The inline style css is from ["Fork me on GitHub" CSS ribbon](http://simonwhitaker.github.io/github-fork-ribbon-css/).

|         | React = 0.12 | React >= 0.13 |
| ------- | ------------ | ------------- |
| Version | <= 0.2       | >= 0.3        |

## Usage

```sh
npm install react-github-fork-ribbon
```

Ex. React 0.14
```js
var React            = require('react');
var ReactDOM         = require('react-dom');
var GitHubForkRibbon = require('react-github-fork-ribbon');

var Content = React.createClass({

  render: function () {
    return (
      <GitHubForkRibbon href="//www.google.com"
                        target="_blank"
                        position="right">
        Fork me on GitHub
      </GitHubForkRibbon>
    );
  }
});

ReactDOM.render(
  <Content />,
  document.getElementById('content')
);
```

Ex. React 0.13
```js
var React            = require('react');
var GitHubForkRibbon = require('react-github-fork-ribbon');

var Content = React.createClass({

  render: function () {
    return (
      <GitHubForkRibbon href="//www.google.com"
                        target="_blank"
                        position="right">
        Fork me on GitHub
      </GitHubForkRibbon>
    );
  }
});

React.render(
  <Content />,
  document.getElementById('content')
);
```

## Attribute

#### href

It would be `<a>` tag's attribute `href`

#### target

It would be `<a>` tag's attribute `target`

#### position

It has four positions.
- `left`
- `right`
- `left-bottom`
- `right-bottom`

### color

It has four color.
- `red`
- `orange`
- `black`
- `green`

## Release Notes

### Version 0.4.5 - 2017/03/11

- Refactor position and color set function
- Remove object-assign library
- Use storybook to help develop

### Version 0.4.4 - 2016/04/30

- Fix React 15 unitless number warning

### Version 0.4.3 - 2016/04/18

- Support React 15.0
- Browserify bundle js file for web usage.

### Version 0.4.2 - 2015/10/11

- Support React 0.14

### Version 0.4.1 - 2015/06/29

- Insert the relevant browser prefix.
  + Webkit, Moz, O, ms.

### Version 0.4.0 - 2015/06/28

- Switch to vanilla inline styles. [PR#7](https://github.com/jessy1092/react-github-fork-ribbon/pull/7)
- Update Dev-dependencies version. `babel` => 5.6.14, `browserify` => 10.2.4

### Version 0.3.0 - 2015/03/28

- Support `react` 0.13.x and `react-style` 0.5.x version
- Use ES6 feature.

### Version 0.2.0 - 2015/03/07

- Add attribute: `color`
- Transpile into vanilla js during prepublish.

### Version 0.1.0 - 2015/01/16

- Init
- Add attribute: `href`, `target`, `position`

## Contribute
[![devDependency Status][david-dm-dev-image]][david-dm-dev-url]

1. Fork it.
2. Create your feature-branch `git checkout -b your-new-feature-branch`
3. Commit your change `git commit -am 'Add new feature'`
4. Push to the branch `git push origin your-new-feature-branch`
5. Create new Pull Request with `master` branch

## License

The MIT License (MIT)

Copyright (c) 2015 Lee  < jessy1092@gmail.com >

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

[react-github-fork-ribbon-url]: https://github.com/jessy1092/react-github-fork-ribbon/releases

[npm-image]: https://img.shields.io/npm/v/react-github-fork-ribbon.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/react-github-fork-ribbon

[david-dm-image]: https://david-dm.org/jessy1092/react-github-fork-ribbon.svg?style=flat-square
[david-dm-url]: https://david-dm.org/jessy1092/react-github-fork-ribbon

[david-dm-dev-image]: https://david-dm.org/jessy1092/react-github-fork-ribbon/dev-status.svg?style=flat-square
[david-dm-dev-url]: https://david-dm.org/jessy1092/react-github-fork-ribbon#info=devDependencies
