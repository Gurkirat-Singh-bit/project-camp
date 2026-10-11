import React from "react";
import type { Preview } from "@storybook/react";
import "../src/styles/globals.css";
import "./preview.css";

const preview: Preview = {
  decorators: [
    (Story) => (
      <div className="light-palette p-6 font-sans text-foreground-primary bg-background-primary min-h-screen">
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],
  parameters: {
    viewport: {
      viewports: {
        mobile: {
          name: "Mobile (375px)",
          styles: { width: "375px", height: "812px" },
        },
        tablet: {
          name: "Tablet (768px)",
          styles: { width: "768px", height: "1024px" },
        },
        desktop: {
          name: "Desktop (1440px)",
          styles: { width: "1440px", height: "900px" },
        },
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
