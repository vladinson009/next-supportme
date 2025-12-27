'use client';
import { MoonIcon, SunIcon } from 'lucide-react';
import { Button } from './ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip';
import { useTheme } from 'next-themes';

type Props = { className?: string };

export default function LightDarkToggle({ className }: Props) {
  const { setTheme, resolvedTheme } = useTheme();
  return (
    <Tooltip>
      <TooltipTrigger asChild className={className}>
        <Button
          onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
          variant="outline"
        >
          <SunIcon className="block dark:hidden" />
          <MoonIcon className="hidden dark:block" />
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <span className="hidden dark:inline">Enable light mode</span>
        <span className="inline dark:hidden">Enable dark mode</span>
      </TooltipContent>
    </Tooltip>
  );
}
