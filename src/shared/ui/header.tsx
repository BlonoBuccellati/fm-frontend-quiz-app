import { cn } from "@/shared/lib/utils";

const Header = ({ className, ...props }: React.ComponentProps<"header">) => {
  return (
    <header
      className={cn(
        "h-sm-500-to-md-700 mx-auto mb-200 flex justify-between py-[clamp(0rem,-1.056rem+4.51vw,3rem)]",
        className,
      )}
      {...props}
    />
  );
};

export { Header };
