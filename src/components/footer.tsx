"use client";

import Link from "next/link";
import Logo from "./logo";
import TextReveal from "./ui/text-reveal";
import { DiscordLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import { MastodonLogo } from "./icons/mastodon";
import { Button } from "./ui/button";

export default function Footer() {
	return (
		<div className="border-grey align-center mt-10 flex w-full flex-col border-t px-10 py-10 font-medium md:px-0">
			<div className="mx-auto flex w-full justify-between border-b px-10 pb-10 pt-10 lg:!w-2/3 lg:px-0">
				<div className="flex flex-col">
					<Logo />
					<div className="mt-auto">
						<h1 className="text-2xl font-bold opacity-80">Zen Browser</h1>
						<h2 className="text-md mt-6 font-bold opacity-80">Follow Us</h2>
						<div className="mt-4 flex opacity-70">
							<a href="https://github.com/zen-browser">
								<GitHubLogoIcon className="h-5 w-5" />
							</a>
							<a
								href="discord.com/servers/mauro-s-little-sweatshop-1088172780480114748"
								className="ml-5"
							>
								<DiscordLogoIcon className="h-5 w-5" />
							</a>
							<a href="https://fosstodon.org/@zenbrowser" className="ml-5">
								<MastodonLogo className="h-5 w-5" />
							</a>
						</div>
					</div>
				</div>
				<div className="flex flex-col md:flex-row">
					<div>
						<h2 className="text-md font-bold opacity-80">Get Started</h2>
						<ul className="mt-4 font-normal opacity-70">
							<li>
								<a href="/themes">Themes</a>
							</li>
							<li className="mt-2">
								<a href="/download">Download</a>
							</li>
							<li className="mt-2">
								<a href="/create-theme">Create a Theme</a>
							</li>
						</ul>
					</div>
					<div className="mt-10 md:ml-12 md:mt-0 lg:ml-24">
						<h2 className="text-md font-bold opacity-80">Get Help</h2>
						<ul className="mt-4 font-normal opacity-70">
							<li>
								<a href="https://discord.com/invite/mauro-s-little-sweatshop">
									Discord
								</a>
							</li>
							<li className="mt-2 font-normal">
								<a href="https://github.com/zen-browser/desktop/issues">
									Report an Issue
								</a>
							</li>
						</ul>
						<h2 className="text-md mt-8 font-bold opacity-80">About</h2>
						<ul className="mt-4 font-normal opacity-70">
							<li className="mt-2">
								<a href="/about">About Us</a>
							</li>
							<li className="mt-2">
								<a href="/privacy-policy">Privacy Policy</a>
							</li>
						</ul>
					</div>
					<div className="mt-10 md:ml-12 md:mt-0 lg:ml-24">
						<h2 className="text-md font-bold opacity-80">Resources</h2>
						<ul className="mt-4 font-normal opacity-70">
							<li>
								<a href="/branding-assets">Branding Assets</a>
							</li>
							<li className="mt-2">
								<a href="https://github.com/zen-browser/desktop">Source Code</a>
							</li>
							<li className="mt-2">
								<a href="https://docs.zen-browser.app">Documentation</a>
							</li>
							<li className="mt-2">
								<a href="/release-notes">Release Notes</a>
							</li>
						</ul>
						<h2 className="text-md mt-8 font-bold opacity-80">Support Us</h2>
						<ul className="mt-4 font-normal opacity-70">
							<li>
								<a href="https://patreon.com/zen_browser">Patreon</a>
							</li>
							<li className="mt-2">
								<a href="https://ko-fi.com/zen_browser">Ko-fi</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="mx-auto flex w-full items-center pl-3 pr-5 pt-10 lg:!w-2/3">
				<p className="text-xs font-normal opacity-30">
					Crafted with ❤️ by the community - Copyright ©{" "}
					{new Date().getFullYear()} Zen Browser
				</p>
				<Button onClick={() => window.open("/download")} className="ml-auto">
					Download
				</Button>
			</div>
		</div>
	);
}
