import { Meta, StoryObj } from "@storybook/nextjs-vite";

import Score from "./score";

const meta = {
  component: Score,
  title: "quiz/Score",
  tags: ["autodocs"],
} satisfies Meta<typeof Score>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    score: 1,
    total: 10,
  },
};
