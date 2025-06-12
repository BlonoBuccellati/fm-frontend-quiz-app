"use client";

import { IconHtml } from "@/assets";
import ButtonWithIcon from "@/components/button-with-icon";
import OptionButton from "@/components/option-button";
import ThemeSwitch from "@/components/theme-switch";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="space-y-200">
      <ThemeSwitch />
      <Button>Submit Answer</Button>
      <ButtonWithIcon title="HTML" icon={IconHtml} />
      <OptionButton no="A" option="4.5:1" isSelected onClick={() => {}} />
    </div>
  );
}
