import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/test";
import {
  LanguageSwitcher,
  type LanguageSwitcherProps,
} from "../../src/language-switcher.js";

function Example(props: LanguageSwitcherProps) {
  const [value, setValue] = useState(props.value);
  return <LanguageSwitcher {...props} value={value} onChange={setValue} />;
}
const meta = {
  title: "Navigation/LanguageSwitcher",
  component: LanguageSwitcher,
  args: {
    value: "en",
    onChange: () => {},
    languages: [
      { code: "en", label: "English" },
      { code: "es", label: "Español" },
      { code: "ar", label: "العربية" },
    ],
  },
  render: (args) => <Example {...args} />,
  decorators: [
    (Story) => (
      <div className="camp-example-component">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof LanguageSwitcher>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const Open: Story = {
  play: async ({ canvasElement }) => {
    await userEvent.click(
      within(canvasElement).getByRole("button", { name: "Change language" }),
    );
  },
};
export const LongLabels: Story = {
  args: {
    languages: [
      {
        code: "en",
        label: "English with a deliberately long regional language label",
      },
      { code: "pt-BR", label: "Português brasileiro" },
    ],
  },
  play: Open.play,
};
