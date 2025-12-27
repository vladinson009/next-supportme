import { Button } from '@/components/ui/button';
import { PersonStandingIcon } from 'lucide-react';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <>
      <h1 className="flex gap-2 items-center">
        <PersonStandingIcon size={50} className="text-pink-500" />
        SupportMe
      </h1>
      <p>The best dashboard to manage cusomer support</p>
      <div className="flex gap-2 items-center">
        <Button asChild className="cursor-pointer">
          <Link href="login">Log in</Link>
        </Button>
        <small>or</small>
        <Button asChild className="cursor-pointer" variant="outline">
          <Link href="sign-up">Sign up</Link>
        </Button>
      </div>
    </>
  );
}
