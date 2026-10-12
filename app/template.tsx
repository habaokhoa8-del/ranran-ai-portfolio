import { type ReactNode } from 'react';

export default function Template({ children }: { children: ReactNode }) {
  // Let Next own route lifetimes; never hold a departing route at zero opacity.
  return <div className="route-entry">{children}</div>;
}
