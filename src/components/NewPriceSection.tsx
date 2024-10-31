"use client";

import { useState } from "react";

import Link from "next/link";

export default function NewPriceSection() {
	return (
    <div className="bg-black pt-16 sm:pt-20 pb-20">
    <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold text-cyan-500 uppercase tracking-widest">Tarifs des Soins</h2>
          
        </div>
        <p className="mx-auto mt-8 max-w-2xl text-center text-2xl leading-relaxed text-gray-100">
         <strong>  Sélectionnez la durée de votre massage et plongez dans un moment de relaxation sur mesure, pensé pour vous.</strong> 
        </p>

        <div className="mt-16 space-y-12">
          
            <div className="w-full rounded-lg bg-gray-800 bg-opacity-60 p-8 shadow-lg border border-gray-700">
                <h3 className="text-2xl font-semibold text-white">Tous les massages (sauf Tao) au cabinet à Halle</h3>
                <div className="mt-6 space-y-4">
                    <p className="flex justify-between text-lg font-medium text-gray-300">
                        <span>1 H 30</span> <span className="text-cyan-500">110 €</span>
                    </p>
                    <p className="flex justify-between text-lg font-medium text-gray-300">
                        <span>2 H</span> <span className="text-cyan-500">140 €</span>
                    </p>
                </div>
            </div>

           
            <div className="w-full rounded-lg bg-gray-800 bg-opacity-60 p-8 shadow-lg border border-gray-700">
                <h3 className="text-2xl font-semibold text-white">Le massage Tao</h3>
                <div className="mt-6 space-y-4">
                    <p className="flex justify-between text-lg font-medium text-gray-300">
                        <span>1 H 30</span> <span className="text-cyan-500">120 €</span>
                    </p>
                    <p className="flex justify-between text-lg font-medium text-gray-300">
                        <span>2 H</span> <span className="text-cyan-500">150 €</span>
                    </p>
                    <p className="flex justify-between text-lg font-medium text-gray-300">
                        <span>2 H 30</span> <span className="text-cyan-500">180 €</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>



	);
}
