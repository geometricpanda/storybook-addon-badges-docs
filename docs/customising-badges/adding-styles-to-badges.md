# Adding Styles to Badges

By default, custom badges appear mostly grey, however you can use the styling functionality to enhance your badges.

## Customising `preview.ts`

To do this, you can customise `.storybook/preview.ts` to add configuration parameters.

```typescript title=".storybook/preview.ts"
import { addParameters } from '@storybook/react';

addParameters({
    badgesConfig: {
        beta: {
            styles: {
                backgroundColor: '#FFF',
                borderColor: '#018786',
                color: '#018786',
            },
            title: 'Beta',
        },
    },
});
```

## Available Style Properties

Theming is limited to a subset of CSS properties, if there are any you need simply raise
[a feature request](https://github.com/geometricpanda/storybook-addon-badges/issues).

| Property          | Default Value |
|-------------------|---------------|
| `borderColor`     | `#474D66`     |
| `borderRadius`    | `3px`         |
| `borderStyle`     | `solid`       |
| `borderWidth`     | `1px`         |
| `color`           | `#474D66`     |
| `backgroundColor` | `#EDEFF5`     |
| `fontSize`        | `0.625rem`    |
| `fontFamily`      | `inherit`     |
| `fontWeight`      | `bold`        |
| `lineHeight`      | `1`           |
| `textTransform`   | `uppercase`   |
| `paddingInline`   | `5px`         |    
| `paddingBlock`    | `2px`         |
