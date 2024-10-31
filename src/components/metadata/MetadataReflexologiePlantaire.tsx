export const MetadataReflexologiePlantaire = [
	{
		"@context": "https://schema.org",
		"@type": "HealthAndBeautyBusiness",
		name: "Séance de réflexologie plantaire à Halle - Halle",
		description: "Séance de réflexologie plantaire à Halle - Halle. Découvrez nos soins personnalisés et retrouvez harmonie, bien-être et sérénité dans un cadre apaisant.",
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
		url: "https://lavoiedubienetre.be/reflexologie-plantaire",
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
						name: "Reflexologie plantaire",
						url: "https://lavoiedubienetre.be/reflexologie-plantaire",
						image: "https://lavoiedubienetre.be/img/pied-se-faisant-masser.webp",
						description: "Ce massage des pieds, où chaque pression est conçu pour éveiller les sens et procurer une sensation de libération.",
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
				name: "Qu'est-ce que la réflexologie plantaire ?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "La réflexologie plantaire est une thérapie alternative qui implique la stimulation des points spécifiques sur les pieds, censés correspondre à différentes parties du corps. Elle vise à promouvoir la relaxation et le bien-être en améliorant la circulation et en réduisant le stress.",
				},
			},
			{
				"@type": "Question",
				name: "Quels sont les principaux bénéfices de la réflexologie plantaire ?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "Les principaux bénéfices incluent la réduction du stress et de l'anxiété, l'amélioration de la circulation sanguine, la promotion de la relaxation et de l'équilibre dans le corps, et l'aide à la gestion de la douleur, notamment dans les pieds et les chevilles.",
				},
			},
			{
				"@type": "Question",
				name: "Combien de temps dure une séance de réflexologie plantaire ?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "Une séance typique de réflexologie plantaire dure environ 30 à 60 minutes, selon le traitement spécifique et les besoins du client.",
				},
			},
			{
				"@type": "Question",
				name: "Y a-t-il des conditions particulières où la réflexologie plantaire est particulièrement recommandée ?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "La réflexologie plantaire est souvent recommandée pour les personnes souffrant de stress chronique, de troubles digestifs, de migraines et de tension dans le corps. Elle est également utilisée pour améliorer la relaxation et le bien-être général.",
				},
			},
			{
				"@type": "Question",
				name: "La réflexologie plantaire peut-elle aider à réduire la douleur ?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "Oui, de nombreux clients rapportent une réduction notable de la douleur, notamment celle associée aux maux de tête, aux tensions musculaires et aux déséquilibres hormonaux après des séances régulières de réflexologie plantaire.",
				},
			},
			{
				"@type": "Question",
				name: "Quelles sont les contre-indications de la réflexologie plantaire ?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "La réflexologie plantaire n'est pas recommandée pour les personnes ayant des fractures récentes aux pieds, des infections fongiques actives, ou des plaies ouvertes. Les femmes enceintes devraient consulter leur médecin avant de débuter un traitement.",
				},
			},
			{
				"@type": "Question",
				name: "À quelle fréquence dois-je recevoir une réflexologie plantaire pour maximiser les bénéfices ?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "La fréquence idéale peut varier selon les besoins individuels. Cependant, une séance toutes les deux semaines est généralement recommandée pour maintenir et améliorer les bienfaits à long terme.",
				},
			},
			{
				"@type": "Question",
				name: "Comment me préparer pour une séance de réflexologie plantaire ?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "Il est conseillé d'arriver détendu et de porter des vêtements confortables qui permettent l'accès facile aux pieds. Évitez de manger un gros repas juste avant la séance.",
				},
			},
			{
				"@type": "Question",
				name: "Y a-t-il des recommandations à suivre après une séance de réflexologie plantaire ?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "Après une séance, il est important de rester hydraté et de se reposer si possible. Cela aide le corps à éliminer les toxines libérées pendant la séance.",
				},
			},
			{
				"@type": "Question",
				name: "Peut-on ressentir de la douleur pendant une séance de réflexologie plantaire ?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "Il est possible de ressentir une sensation d'inconfort ou de sensibilité pendant la manipulation des points de pression, surtout si une zone reflète une tension ou un déséquilibre dans le corps. Cependant, ces sensations devraient être temporaires et communiquer tout inconfort au thérapeute est crucial.",
				},
			},
		],
	},
];
