import { cn } from "@/shared/lib/utils";

const Header = ({ className, ...props }: React.ComponentProps<"header">) => {
  return (
    <header
      className={cn(
        "h-sm-500-to-md-700 mx-auto my-[clamp(1rem,-0.43rem+6.1vw,5.063rem)] flex justify-between py-200 pb-200",
        className,
      )}
      {...props}
    />
  );
};

export { Header };
