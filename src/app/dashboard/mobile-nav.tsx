'use client';

import { useMediaQuery } from '@/hooks/use-media-query';
import MenuTitle from './components/menu-title';
import {
  Drawer,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { MenuIcon } from 'lucide-react';
import MainMenu from './components/main-menu';
import { useState } from 'react';

export default function MobileNavDrawer() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isDesktop = useMediaQuery('(min-width: 768px)');

  if (isDesktop) {
    return null;
  }
  return (
    !isDesktop && (
      <div className="p-4 flex justify-between md:hidden sticky top-0 left-0 bg-background border-b border-border">
        <MenuTitle />
        <Drawer
          direction="right"
          open={mobileMenuOpen}
          onOpenChange={setMobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
        >
          <DrawerTrigger>
            <MenuIcon />
          </DrawerTrigger>
          <DrawerTitle className="hidden">Navigation drawer</DrawerTitle>
          <DrawerContent>
            <MainMenu />
          </DrawerContent>
        </Drawer>
      </div>
    )
  );
}
