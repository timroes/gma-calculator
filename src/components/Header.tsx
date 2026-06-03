import React from 'react';
import { Menu, Mail } from 'lucide-react';

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuTrigger,
} from './ui/dropdown-menu';
import logo from '../logo.png';

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
			<path d="M12 .5C5.37.5 0 5.78 0 12.292c0 5.211 3.438 9.63 8.205 11.188.6.111.82-.254.82-.567 0-.28-.01-1.022-.015-2.005-3.338.711-4.042-1.582-4.042-1.582-.546-1.361-1.335-1.725-1.335-1.725-1.087-.731.084-.716.084-.716 1.205.082 1.838 1.215 1.838 1.215 1.07 1.803 2.809 1.282 3.495.981.108-.763.417-1.282.76-1.577-2.665-.295-5.466-1.309-5.466-5.827 0-1.287.465-2.339 1.235-3.164-.135-.298-.54-1.497.105-3.121 0 0 1.005-.316 3.3 1.209.96-.262 1.98-.392 3-.398 1.02.006 2.04.136 3 .398 2.28-1.525 3.285-1.209 3.285-1.209.645 1.624.24 2.823.12 3.121.765.825 1.23 1.877 1.23 3.164 0 4.53-2.805 5.527-5.475 5.817.42.354.81 1.077.81 2.182 0 1.578-.015 2.846-.015 3.229 0 .309.21.678.825.561C20.565 21.917 24 17.495 24 12.292 24 5.78 18.627.5 12 .5z" />
		</svg>
	);
}

export function Header() {
	return (
		<header className="relative mx-auto mt-5 flex max-w-[min(800px,90vw)] items-center gap-3 rounded-full bg-white py-2 pr-3 shadow-md">
			<div className="absolute ml-5 rounded-full bg-gradient-to-br from-orange-400 to-teal-500 p-[3px] shadow-[0_0_12px_rgba(45,212,191,0.55)]">
				<img
					src={logo}
					alt=""
					aria-hidden="true"
					className="h-14 w-14 rounded-full bg-white object-cover p-2"
				/>
			</div>
			<h1 className="m-0 min-w-0 flex-1 truncate pl-[104px] text-left text-[1.05em] font-normal max-sm:text-[14px]">
				German Meal Allowance Calculator
			</h1>
			<DropdownMenu>
				<DropdownMenuTrigger
					aria-label="Menu"
					className="inline-flex shrink-0 cursor-pointer items-center justify-center rounded-full p-2 text-muted-foreground outline-none transition-colors hover:bg-teal-50 hover:text-teal-700 focus-visible:ring-2 focus-visible:ring-ring/50"
				>
					<Menu className="size-5" />
				</DropdownMenuTrigger>
				<DropdownMenuContent align="end" className="w-52">
					<DropdownMenuLabel>Report issue</DropdownMenuLabel>
					<DropdownMenuGroup>
						<DropdownMenuItem asChild>
							<a href="mailto:mail@timroes.de?subject=%5BGMA%20Calculator%5D">
								<Mail />
								E-Mail
							</a>
						</DropdownMenuItem>
						<DropdownMenuItem asChild>
							<a
								href="https://github.com/timroes/gma-calculator/issues"
								target="_blank"
								rel="noopener noreferrer"
							>
								<GithubIcon />
								GitHub
							</a>
						</DropdownMenuItem>
					</DropdownMenuGroup>
				</DropdownMenuContent>
			</DropdownMenu>
		</header>
	);
}
