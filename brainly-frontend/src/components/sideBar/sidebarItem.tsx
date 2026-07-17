import type { ReactElement } from "react";

export function SidebarItems({
  text,
  icon,
}: {
  text: string;
  icon: ReactElement;
}) {
  return (
    <div className="flex pt-5 pl-5 gap-4 cursor-pointer hover:text-purple-400">
      <div>{icon}</div>
      <div>{text}</div>
    </div>
  );
}
