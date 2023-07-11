import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';

const meta: Meta<typeof Select> = {
    title: 'shared/Select',
    component: Select,
    tags: ['autodocs'],
    args: {
    },
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Primary: Story = {
    args: {
        label: 'Список валют',
        options: [
            { value: '1', content: 'first' },
            { value: '2', content: 'second' },
        ],
    },
};
