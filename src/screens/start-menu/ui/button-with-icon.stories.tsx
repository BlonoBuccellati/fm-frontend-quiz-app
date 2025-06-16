import { Meta, StoryObj } from "@storybook/nextjs-vite";

import ButtonWithIcon from "./button-with-icon";

const meta = {
  component: ButtonWithIcon,
  title: "Button/ButtonWithIcon",
  tags: ["autodocs"],
} satisfies Meta<typeof ButtonWithIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const HTMLButton: Story = {
  args: {
    title: "HTML",
    iconSrc: "/assets/images/icon-html.svg",
  },
  render: ({ ...props }) => (
    <div>
      <ButtonWithIcon {...props} />
    </div>
  ),
};
export const CSSButton: Story = {
  args: {
    title: "CSS",
    iconSrc: "/public/assets/images/icon-css.svg",
    iconBgColor: "css",
  },
  render: ({ ...props }) => (
    <div>
      <ButtonWithIcon {...props} />
    </div>
  ),
};
export const JSButton: Story = {
  args: {
    title: "Javascript",
    iconSrc: "/public/assets/images/icon-js.svg",
    iconBgColor: "javaScript",
  },
  render: ({ ...props }) => (
    <div>
      <ButtonWithIcon {...props} />
    </div>
  ),
};
export const AccessibilityButton: Story = {
  args: {
    title: "Accessibility",
    iconSrc: "/public/assets/images/icon-accessibility.svg",
    iconBgColor: "accessibility",
  },
  render: ({ ...props }) => (
    <div>
      <ButtonWithIcon {...props} />
    </div>
  ),
};
