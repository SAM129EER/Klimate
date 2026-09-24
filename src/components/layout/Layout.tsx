import type { PropsWithChildren } from "react";

import Header from "../Header";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="scrollbar-none min-h-screen bg-linear-to-r from-background to-muted">
      <Header />

      <main className="container mx-auto min-h-[calc(100vh-4rem)] px-4 py-8 sm:px-6 lg:px-8">
        {children}
      </main>
    </div>
  );
};

export default Layout;
