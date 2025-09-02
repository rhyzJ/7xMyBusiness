interface PageContentWrapperProps {
  children: React.ReactNode;
}

export default function LandingLayout({ children }: PageContentWrapperProps) {
  return (
    <div className="w-full px-4 sm:px-0 max-w-6xl mx-auto flex flex-col items-center">
      <main className="space-y-6 sm:space-y-8 w-full">{children}</main>
    </div>
  );
}
