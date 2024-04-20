"use client";

import { useRouter } from "next/navigation";

export default function BackHomeButton() {
	const router = useRouter();

	const handleClick = () => {
		router.push("/");
	};

	return (
		<div>
			<button onClick={handleClick} className="bg-slate-300 hover:bg-emerald-500 text-slate-900 p-3 rounded">
				Retour à la page d&apos;accueil
			</button>
		</div>
	);
}
