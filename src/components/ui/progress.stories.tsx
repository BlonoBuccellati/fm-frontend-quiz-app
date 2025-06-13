import { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Progress } from "./progress";

const meta = {
  component: Progress,
  title: "ui/Progress",
  tags: ["autodocs"],
} satisfies Meta<typeof Progress>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 10,
  },
};
