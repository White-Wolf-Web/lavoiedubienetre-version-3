export const MetadataShiatsu = [
	{
		"@context": "https://schema.org",
		"@type": "HealthAndBeautyBusiness",
		name: "Séance de Shiatsu à Halle - Halle",
		description: "Séance de Shiatsu à Halle - Halle. Découvrez nos soins personnalisés et retrouvez harmonie, bien-être et sérénité dans un cadre apaisant.",
		address: {
			"@type": "PostalAddress",
			streetAddress: "Rue de Chapelle 54",
			addressLocality: "Halle",
			postalCode: "6183",
			addressCountry: "BE",
		},
		openingHoursSpecification: [
			{
				"@type": "OpeningHoursSpecification",
				dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
				opens: "10:00",
				closes: "20:00",
			},
			{
				"@type": "OpeningHoursSpecification",
				dayOfWeek: "Saturday",
				opens: "10:00",
				closes: "20:00",
			},
		],
		telephone: "O477131993",
		email: "lavoiedubienetre@outlook.com",
		image: "https://www.lavoiedubienetre.be/img/banniere-la-voie-du-bien-etre.webp",
		url: "https://www.lavoiedubienetre.be",
		priceRange: "$$",
		sameAs: ["https://www.facebook.com/lavoiedubienetremassageshiatsureikireflexologie/"],
		hasOfferCatalog: {
			"@type": "OfferCatalog",
			name: "Séances de Shiatsu",
			itemListElement: [
				{
					"@type": "Offer",
					itemOffered: {
						"@type": "Service",
						name: "'Toucher Shiatsu'",
						url: "https://lavoiedubienetre.be/shiatsu/traditionnel",
						description: "Basé sur les principes de l'énergie vitale, le Shiatsu vise à rétablir la circulation énergétique optimale et favoriser un bien-être global.",
						offers: {
							"@type": "Offer",
							price: "59",
							priceCurrency: "EUR",
						},
					},
				},
			],
		},
	},
	{
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: [
			{
				"@type": "Question",
				name: "Qu'est-ce que le Shiatsu ?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "Le Shiatsu est une forme de thérapie manuelle japonaise qui utilise des pressions avec les doigts et les paumes sur des points spécifiques du corps pour améliorer la circulation énergétique et favoriser un état de bien-être.",
				},
			},
			{
				"@type": "Question",
				name: "Le Shiatsu peut-il aider à réduire le stress ?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "Oui, le Shiatsu est particulièrement efficace pour réduire le stress et l'anxiété, car il favorise la détente profonde du corps et de l'esprit.",
				},
			},
			{
				"@type": "Question",
				name: "Comment dois-je me préparer pour une séance de Shiatsu ?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "Il est conseillé de porter des vêtements confortables et souples. Évitez de manger un gros repas juste avant la séance pour être plus à l'aise.",
				},
			},
			{
				"@type": "Question",
				name: "Combien de temps dure une séance de Shiatsu ?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "Une séance typique de Shiatsu dure entre 60 et 90 minutes, selon les besoins spécifiques du client.",
				},
			},
			{
				"@type": "Question",
				name: "Le Shiatsu est-il réalisé sur une table de massage ?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "Traditionnellement, le Shiatsu est pratiqué sur un futon posé au sol, mais il peut aussi être adapté à une table de massage selon les préférences.",
				},
			},
			{
				"@type": "Question",
				name: "Y a-t-il des contre-indications au Shiatsu ?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "Le Shiatsu est généralement sûr, mais certaines conditions comme les blessures récentes, les inflammations ou les maladies graves nécessitent une attention particulière. Consultez toujours un professionnel.",
				},
			},
			{
				"@type": "Question",
				name: "Puis-je recevoir du Shiatsu si je suis enceinte ?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "Le Shiatsu peut être bénéfique pendant la grossesse, mais certaines modifications sont nécessaires. Il est important d'informer le praticien de votre grossesse.",
				},
			},
			{
				"@type": "Question",
				name: "Le Shiatsu peut-il soulager les douleurs musculaires ?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "Oui, le Shiatsu aide à soulager les tensions musculaires et à améliorer la flexibilité en rétablissant l'équilibre énergétique dans le corps.",
				},
			},
			{
				"@type": "Question",
				name: "Quelle est la fréquence recommandée pour le Shiatsu ?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "Cela varie en fonction des besoins individuels. Une séance mensuelle peut suffire pour la maintenance, mais des séances plus fréquentes peuvent être nécessaires pour des besoins thérapeutiques spécifiques.",
				},
			},
			{
				"@type": "Question",
				name: "Le Shiatsu implique-t-il l'utilisation d'huiles ou de lotions ?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "Non, le Shiatsu est pratiqué à travers les vêtements et n'implique pas l'utilisation d'huiles ou de lotions.",
				},
			},
		],
	},
];
