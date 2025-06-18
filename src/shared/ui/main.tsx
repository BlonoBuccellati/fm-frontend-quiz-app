import { PropsWithChildren } from "react";

import { cn } from "@/shared/lib/utils";

const Main = ({
  children,
  className,
}: PropsWithChildren & { className?: string }) => {
  return (
    // 要素は２つしかないため
    // 最初の子要素に、のみ、max-w-[41%]を適用,２つ目は、伸ばす。
    <main
      className={cn(
        "desktop:flex desktop:space-x-1600 desktop:[&>*:first-child]:max-w-[41%] desktop:[&>*:nth-child(2)]:flex-[1] mx-auto",
        className,
      )}
    >
      {children}
    </main>
  );
};

export default Main;
