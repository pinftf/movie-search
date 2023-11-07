import { Button } from './Button'
import Heart from '../Icons/Heart'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered'
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' }
  }
}

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {
  args: {
    children: 'Button'
  }
}

export const Secondary = {
  args: {
    variant: 'secondary',
    children: 'Button'
  }
}

export const Ghost = {
  args: {
    variant: 'ghost',
    children: 'Button'
  }
}

export const PrimaryWithIcon = {
  args: {
    children: 'Favorite',
    icon: <Heart color="red" />
  }
}

export const Large = {
  args: {
    size: 'large',
    children: 'Button'
  }
}

export const Small = {
  args: {
    size: 'small',
    children: 'Button'
  }
}
