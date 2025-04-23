
import React from "react";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerClose } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface CardFeatureDrawerProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const CardFeatureDrawer: React.FC<CardFeatureDrawerProps> = ({
  open,
  onClose,
  title,
  children,
}) => {
  return (
    <Drawer open={open} onOpenChange={open => { if (!open) onClose(); }}>
      <DrawerContent className="!rounded-t-2xl !shadow-2xl animate-fade-in">
        <DrawerHeader>
          <div className="flex justify-between items-center">
            <DrawerTitle>{title}</DrawerTitle>
            <DrawerClose asChild>
              <Button size="icon" variant="ghost">
                <X />
              </Button>
            </DrawerClose>
          </div>
        </DrawerHeader>
        <div className="px-6 pb-6">
          {children}
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default CardFeatureDrawer;
