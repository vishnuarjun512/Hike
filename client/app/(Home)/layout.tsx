import { redirect } from "next/navigation";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = "biku";

  if (user == null) {
    redirect("/auth");
  }
  return <div>{children}</div>;
}
