interface PageContentWrapperProps {
  children: React.ReactNode;
}

export default function LandingLayout({ children }: PageContentWrapperProps) {
  return (
    <div className="max-w-6xl mx-auto flex flex-col items-center">
      <main className="space-y-8">{children}</main>
    </div>
  );
}
