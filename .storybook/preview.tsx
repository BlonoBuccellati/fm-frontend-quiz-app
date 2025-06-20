import type { Preview } from "@storybook/nextjs-vite";
import React from "react";

import "@/app/_styles/globals.css";

import { ThemeProvider } from "./../src/app/_providers/theme-provider";

export const globalTypes: Preview["globalTypes"] = {
  theme: {
    //
    name: "Theme Color",
    description: "Global light/dark theme for components",
    defaultValue: "system",
    toolbar: {
      title: "Theme Color",
      items: [
        { title: "Light", value: "light" },
        { title: "Dark", value: "dark" },
        { title: "default", value: "system" },
      ],
      dynamicTitle: true,
    },
  },
};

const preview: Preview = {
  decorators: [
    (Story, context) => {
      const mode = context.globals.theme as "light" | "dark" | "system";

      // Storybook 用に forcedTheme を追加したいときだけマージ
      const propsWithForced = mode === "system" ? {} : { forcedTheme: mode };
      console.log(mode);
      return (
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          {...propsWithForced} // storybookは強制的に切り替えるようにする。
        >
          <Story />
        </ThemeProvider>
      );
    },
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },
  },
};

export default preview;
