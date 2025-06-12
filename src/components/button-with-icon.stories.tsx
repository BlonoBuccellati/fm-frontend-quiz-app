import { Meta, StoryObj } from "@storybook/nextjs-vite";

import { IconAccessibility, IconCss, IconHtml, IconJavascript } from "@/assets";

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
    icon: IconHtml,
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
    icon: IconCss,
    iconColor: "css",
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
    icon: IconJavascript,
    iconColor: "javaScript",
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
    icon: IconAccessibility,
    iconColor: "accessibility",
  },
  render: ({ ...props }) => (
    <div>
      <ButtonWithIcon {...props} />
    </div>
  ),
};
