# split-string-every

![npm-badge](https://img.shields.io/npm/v/split-string-every.svg)
[![GitHub issues](https://img.shields.io/github/issues/muhajirframe/split-string-every.svg)](https://github.com/muhajirframe/split-string-every/issues)
[![GitHub license](https://img.shields.io/github/license/muhajirframe/split-string-every.svg)](https://github.com/muhajirframe/split-string-every/blob/master/LICENSE)
![npm type definitions](https://img.shields.io/npm/types/split-string-every.svg)
[![CircleCI](https://circleci.com/gh/muhajirframe/split-string-every.svg?style=svg)](https://circleci.com/gh/muhajirframe/split-string-every)
[![Twitter](https://img.shields.io/twitter/url/https/github.com/muhajirframe/split-string-every.svg?style=social)](https://twitter.com/intent/tweet?text=Wow:&url=https%3A%2F%2Fgithub.com%2Fmuhajirframe%2Fsplit-string-every)

## Installation

```bash
npm install --save split-string-every
```

## Usage

```javascript
import { isInternalLink } from "split-string-every";
```
or

```javascript
import isInternalLink from "split-string-every";
```

```javascript
isInternalLink("https://www.google.com"); // false
```

```javascript
isInternalLink("/page1"); // true
```

## Test

```bash
npm run test
```

## Why ?

I found my self doing this every time I started new project.
That's why I decided to make this logic to abstract the logic and share it with the world

## How does it fit in my App?

This is one example, if you're using React. And just want to have a single component.
Instead of sometimes using `<Link>` and sometimes using `<a>`. Just create new `Link` component and use it everywhere.

Another pattern I usually use. Usually I add `target="_blank"` for external link.
So every external link will be opened in new tab

```javascript
import React from "react";

import { Link as ReactRouterLink } from "react-router-dom";
import { isInternalLink } from "split-string-every";

const Link = ({ children, to, activeClassName, ...other }) => {
  if (isInternalLink(to)) {
    return (
      <ReactRouterLink to={to} activeClassName={activeClassName} {...other}>
        {children}
      </ReactRouterLink>
    );
  }
  return (
    <a href={to} target="_blank" {...other}>
      {children}
    </a>
  );
};

export default Link;
```

## Contributors

- [muhajirframe](https://github.com/muhajirframe)
- [franciscop-invast](https://github.com/franciscop-invast)

## Contributing

Please do not hesitate to submit an issue or pull request.

## Question?

Submit an issue || ping me [@muhajirframe](https://twitter.com/muhajirframe) on twitter

## License

MIT

**Enjoy**
