import { Meta, StoryObj } from "@storybook/nextjs-vite";

import Logo from "./logo";

const meta = {
  component: Logo,
  title: "Logo",
  tags: ["autodocs"],
} satisfies Meta<typeof Logo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "CSS",
    icon: "/assets/images/icon-css.svg",
    iconBgColor: "css",
  },
};
