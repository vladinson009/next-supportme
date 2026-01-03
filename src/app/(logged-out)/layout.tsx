import LightDarkToggle from '@/components/light-dark-toggle';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { PropsWithChildren } from 'react';
type Props = PropsWithChildren & {};

export default function LoggedOutLayout({ children }: Props) {
  return (
    <>
      <div className="flex justify-center mt-10">
        <Button asChild variant="link">
          <Link className="animate-pulse " href="/dashboard">
            <h1>Dashboard</h1>
          </Link>
        </Button>
        <p>(Mocked backend)</p>
      </div>
      <div className="flex flex-col gap-4 min-h-screen items-center justify-center p-24">
        {children}
      </div>
      <LightDarkToggle className="fixed right-0 top-1/2" />
    </>
  );
}
