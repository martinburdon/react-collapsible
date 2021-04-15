# @mtburdon/react-collapsible

> React collapsible component

[![NPM](https://img.shields.io/npm/v/@mtburdon/react-collapsible.svg)](https://www.npmjs.com/package/@mtburdon/react-collapsible) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @mtburdon/react-collapsible
```

**[Example](https://martinburdon.github.io/react-collapsible/)**

## Usage

```tsx
import React, { Component } from 'react';

import {
  Collapsible,
  CollapsibleHead,
  CollapsibleBody
} from '@mtburdon/react-collapsible';
import '@mtburdon/react-collapsible/dist/index.css';

class Example extends Component {
  render() {
    return (
      <Collapsible>
        <CollapsibleHead>Toggle me</CollapsibleHead>
        <CollapsibleBody>Some content</CollapsibleBody>
      </Collapsible>
    );
  }
}
```

### Available CSS custom properties

```css
--collapsible-margin
--collapsible-head-background
--collapsible-head-color
--collapsible-head-font-weight
--collapsible-head-padding
--collapsible-body-background
--collapsible-body-color
--collapsible-body-padding
```

## License

MIT © [martinburdon](https://github.com/martinburdon)
