'use client';

import type { ComponentType } from 'react';
import alert from './alert';
import avatar from './avatar';
import badge from './badge';
import breadcrumb from './breadcrumb';
import button from './button';
import card from './card';
import checkbox from './checkbox';
import collapsible from './collapsible';
import confirmDialog from './confirm-dialog';
import dialog from './dialog';
import dropdownMenu from './dropdown-menu';
import emptyState from './empty-state';
import errorState from './error-state';
import icon from './icon';
import input from './input';
import inputOtp from './input-otp';
import label from './label';
import navigationMenu from './navigation-menu';
import offlineBanner from './offline-banner';
import pagination from './pagination';
import placeholderPattern from './placeholder-pattern';
import select from './select';
import separator from './separator';
import sheet from './sheet';
import sidebar from './sidebar';
import skeleton from './skeleton';
import skeletons from './skeletons';
import sonner from './sonner';
import spinner from './spinner';
import switchExample from './switch';
import table from './table';
import toggle from './toggle';
import toggleGroup from './toggle-group';
import tooltip from './tooltip';
import useAppearance from './use-appearance';
import useMobile from './use-mobile';

/** Exemple par nom d'item du registre. Le fichier source de chacun est examples/{name}.tsx. */
const EXAMPLES: Record<string, ComponentType> = {
    alert,
    avatar,
    badge,
    breadcrumb,
    button,
    card,
    checkbox,
    collapsible,
    'confirm-dialog': confirmDialog,
    dialog,
    'dropdown-menu': dropdownMenu,
    'empty-state': emptyState,
    'error-state': errorState,
    icon,
    input,
    'input-otp': inputOtp,
    label,
    'navigation-menu': navigationMenu,
    'offline-banner': offlineBanner,
    pagination,
    'placeholder-pattern': placeholderPattern,
    select,
    separator,
    sheet,
    sidebar,
    skeleton,
    skeletons,
    sonner,
    spinner,
    switch: switchExample,
    table,
    toggle,
    'toggle-group': toggleGroup,
    tooltip,
    'use-appearance': useAppearance,
    'use-mobile': useMobile,
};

export function ExamplePreview({ name }: { name: string }) {
    const Example = EXAMPLES[name];

    return Example ? <Example /> : null;
}
