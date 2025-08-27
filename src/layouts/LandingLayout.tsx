interface LandingLayoutProps {
  children: React.ReactNode;
}

export default function LandingLayout({ children }: LandingLayoutProps) {
  return (
    <div className="max-w-6xl mx-auto flex flex-col items-center">
      <main className="space-y-8">{children}</main>
    </div>
  );
}
