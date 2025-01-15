'use client';
import type { ReactNode } from 'react';
import { ReactQueryProvider } from 'providers/ReactQueryProvider';

function AppLayout({ children }: { children: ReactNode }) {
  return (
    <ReactQueryProvider>
      <div className="bg-slate-900 leading-relaxed text-slate-400 selection:bg-teal-300 selection:text-teal-900">
        {children}
      </div>
    </ReactQueryProvider>
  );
}

export default AppLayout;
