import { Meta, StoryObj } from "@storybook/nextjs-vite";

import ThemeSwitch from "./theme-switch";

const meta = {
  component: ThemeSwitch,
  title: "ThemeSwitch",
} satisfies Meta<typeof ThemeSwitch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
