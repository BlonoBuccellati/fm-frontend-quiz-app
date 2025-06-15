import { IconAccessibility } from "@/shared/assets";
import { cn } from "@/shared/lib/utils";

import IconContainer from "../../../shared/ui/elements/container/icon-container";

const Logo = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn("typo-4 flex items-center space-x-100 p-100", className)}
    >
      <IconContainer iconBgColor="accessibility">
        <IconAccessibility className="w-[80%]" />
      </IconContainer>
      <p className="block">Accessibility</p>
    </div>
  );
};

export default Logo;
