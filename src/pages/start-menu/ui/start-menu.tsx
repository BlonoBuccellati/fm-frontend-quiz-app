import ButtonWithIcon from "@/pages/start-menu/ui/button-with-icon";
import {
  IconAccessibility,
  IconCss,
  IconHtml,
  IconJavascript,
} from "@/shared/assets";
import ThemeSwitch from "@/shared/ui/elements/switch/theme-switch";

const StartMenu = () => {
  return (
    <div className="space-y-200">
      <div className="flex justify-between px-100 py-200">
        <div className="" />
        <ThemeSwitch />
      </div>
      <header>
        <h1 className="typo-2-light">
          Welcome to the <span className="typo-2">Frontend Quiz</span>
        </h1>
        <p className="typo-5-italic">Pick a subject to get started.</p>
      </header>
      <main className="px-300 py-400">
        {/* ボタンリスト */}
        <div className="space-y-200">
          <ButtonWithIcon
            title="HTML"
            icon={IconHtml}
            className="w-full"
            iconBgColor="html"
          />
          <ButtonWithIcon
            title="CSS"
            icon={IconCss}
            className="w-full"
            iconBgColor="css"
          />
          <ButtonWithIcon
            title="Javascript"
            icon={IconJavascript}
            className="w-full"
            iconBgColor="javaScript"
          />
          <ButtonWithIcon
            title="Accessibility"
            icon={IconAccessibility}
            className="w-full"
            iconBgColor="accessibility"
          />
        </div>
      </main>
    </div>
  );
};

export default StartMenu;
