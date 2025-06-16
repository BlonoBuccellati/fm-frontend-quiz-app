import Logo from "@/screens/quiz/ui/logo";
import { cn } from "@/shared/lib/utils";

import IconContainer from "../elements/container/icon-container";
import ThemeSwitch from "../elements/switch/theme-switch";

type GlobalHeaderProps = {
  title?: string;
  icon?: string;
  bgIconColor?: string;
  className?: string;
};
const GlobalHeader = ({
  title = "",
  icon,
  bgIconColor,
  className,
}: GlobalHeaderProps) => {
  const renderIcon = () => {
    if (!icon) {
      return <IconContainer imageAlt="" />;
    }
    return (
      <Logo
        title={title}
        icon={icon}
        iconBgColor={
          bgIconColor as "html" | "css" | "javaScript" | "accessibility"
        }
      />
    );
  };
  return (
    <div
      className={cn(
        "mx-auto flex justify-between py-[clamp(0rem,-1.056rem+4.51vw,3rem)]",
        className,
      )}
    >
      {renderIcon()}
      <ThemeSwitch />
    </div>
  );
};

export default GlobalHeader;
