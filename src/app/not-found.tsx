import BackHomeButton from "@/components/BackHomeButton";

export default function Notfound() {
	return (
		<div className="w-full h-screen flex justify-center items-center flex-col">
			<h1 className="text-center text-slate-300 text-4xl my-6   ">Oooups 404</h1>
            <p> Vous vous êtes perdu</p>
			<BackHomeButton />

		</div>
	);
}
