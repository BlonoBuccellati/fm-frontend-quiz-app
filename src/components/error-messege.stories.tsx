import { Meta, StoryObj } from "@storybook/nextjs-vite";

import ErrorMessage from "./error-messege";

const meta = {
  component: ErrorMessage,
  title: "ErrorMessage",
  tags: ["autodocs"],
} satisfies Meta<typeof ErrorMessage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const AccessibilityButton: Story = {
  args: {},
};
