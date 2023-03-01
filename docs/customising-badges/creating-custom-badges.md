---
sidebar_position: 1
---

# Creating Custom Badges

## Customising `preview.ts`

It's easy to create a custom badge, you can customise `.storybook/preview.ts` to add configuration parameters.

```typescript title=".storybook/preview.ts"
import { addParameters } from '@storybook/react';

addParameters({
    badgesConfig: {
        MyCustomBadge: {
            title: 'My Custom Badge',
        },
    },
});
```

Simply pass in the key which you will use to identify the badge to the `badgesConfig` key of `addParameters`.

When you do this, you must also pass in the `title` of your new custom badge.

:::tip Using Typescript?

You can get type completion by importing the `BadgesConfig` type and adding it
to your `addParameters` function.

```typescript title=".storybook/preview.ts"
import type { BadgesConfig } from "@geometricpanda/storybook-addon-badges";

addParameters({
    badgesConfig: <BadgesConfig> { ... },
});
```

:::


## Using ENUMS to define badges

:::tip Using Typescript?
Avoid magic strings by using an ENUM.
:::

```typescript title=".storybook/badges.ts"
export enum BADGE {
    APPROVED = 'approved',
    PENDING = 'pending',
    REJECTED = 'rejected'
}
```

```typescript title=".storybook/preview.ts"
import { BADGE } from './badges.ts'; 
import type { BadgesConfig } from "@geometricpanda/storybook-addon-badges";

addParameters({
    badgesConfig: <BadgesConfig> {
        [BADGE.APPROVED]: { ... },
    },
});
```

```typescript title="my-component.story.tsx"
import { BADGE } from '../.storybook/badges.ts';

export default {
  title: 'Path/To/MyComponent',
  parameters: {
    badges: [BADGE.APPROVED],
  },
};
```


