"use client";

import { Toggle } from "@/components/ui/toggle";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Skeleton } from "./ui/skeleton";

const ThemeSwitch = ({ ...props }) => {
	const [mounted, setMounted] = useState(false);
	const { resolvedTheme, setTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return <Skeleton className={`h-10 w-10 ${props.className}`} />;
	}

	return (
		<Toggle
			variant="outline"
			onClick={() => {
				resolvedTheme === "dark" ? setTheme("light") : setTheme("dark");
			}}
			{...props}
		>
			{resolvedTheme === "dark" ? <Moon /> : <Sun />}
		</Toggle>
	);
};

export default ThemeSwitch;
