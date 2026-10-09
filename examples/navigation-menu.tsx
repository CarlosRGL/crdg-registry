'use client';

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

const DEMARCHES = [
    { title: "ID card", description: 'First application or renewal.' },
    { title: 'Passport', description: 'Adult or minor, with pre-application.' },
    { title: 'Urban planning', description: 'Appointment with the reviewing department.' },
];

export default function NavigationMenuExample() {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-80 gap-1 p-2">
                            {DEMARCHES.map((item) => (
                                <li key={item.title}>
                                    <NavigationMenuLink href="#">
                                        <div className="flex flex-col gap-0.5">
                                            <span className="font-medium">{item.title}</span>
                                            <span className="text-muted-foreground">{item.description}</span>
                                        </div>
                                    </NavigationMenuLink>
                                </li>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink href="#">Opening hours</NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink href="#">Contact</NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
}
