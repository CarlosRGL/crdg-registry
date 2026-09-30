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
    { title: "Carte d'identité", description: 'Première demande ou renouvellement.' },
    { title: 'Passeport', description: 'Adulte ou mineur, avec pré-demande.' },
    { title: 'Urbanisme', description: 'Rendez-vous avec le service instructeur.' },
];

export default function NavigationMenuExample() {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Démarches</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-80 gap-1 p-2">
                            {DEMARCHES.map((item) => (
                                <li key={item.title}>
                                    <NavigationMenuLink href="#" className="flex-col items-start gap-0.5">
                                        <span className="font-medium">{item.title}</span>
                                        <span className="text-muted-foreground">{item.description}</span>
                                    </NavigationMenuLink>
                                </li>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink href="#">Horaires</NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink href="#">Contact</NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
}
