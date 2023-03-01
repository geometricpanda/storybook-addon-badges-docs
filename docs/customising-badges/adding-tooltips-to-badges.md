# Adding Tooltips to Badges

It's easy to add tooltips to your badges, simply add a small amount of config and voilà.

## Customising `preview.ts`

To do this, you can customise `.storybook/preview.ts` to add a simple string tooltip to
your parameters.

```typescript title=".storybook/preview.ts"
import { addParameters } from '@storybook/react';

addParameters({
    badgesConfig: {
        beta: {
            title: 'Beta',
            tooltip: 'This component is deprecated, please avoid using it.',
        },
    },
});
```

Now when you hover over your badge, a tooltip will appear.

## Advanced Tooltips

As the Badges addon uses the Storybook tooltip under the hood, you can configure
more advanced functionality such as titles, links, and buttons


```typescript title=".storybook/preview.ts"
addParameters({
    badgesConfig: {
        beta: {
            tooltip: {
                title: 'This is Beta',
                desc: 'Be ready to receive updates frequently and leave a feedback',
                links: [
                    { title: 'Read more', href: 'http://path/to/your/docs' },
                    { title: 'Leave feedback', onClick: () => alert('thanks for the feedback') },
                ],
            },
        },
    },
});
```
