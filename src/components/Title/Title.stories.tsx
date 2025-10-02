import type { Meta, StoryObj } from '@storybook/react-vite';
import { Title } from './Title';

const meta = {
  component: Title,
  title: 'Components/Title',
  tags: ['autodocs'],
  excludeStories: /.*Data$/,
} satisfies Meta<typeof Title>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: 'testing text',
  },
};

export const WithAdviceNumber: Story = {
  args: {
    text: 'ADVICE #117',
  },
};

export const LongText: Story = {
  args: {
    text: 'ADVICE #999 WITH A VERY LONG TITLE',
  },
};
