export const MetadataMassageSurChaise = [
	{
		"@context": "https://schema.org",
		"@type": "HealthAndBeautyBusiness",
		name: "Séance de massage sur chaise à Halle - Halle",
		description: "Séance de massage sur chaise à Halle - Halle - au sein de votre entreprise. Retrouvez ainsi harmonie, bien-être et sérénité dans un cadre apaisant.",
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
		url: "https://lavoiedubienetre.be/",
		priceRange: "$$",
		sameAs: ["https://www.facebook.com/lavoiedubienetremassageshiatsureikireflexologie/"],
		hasOfferCatalog: {
			"@type": "OfferCatalog",
			name: "Séances massage sur chaise en entreprise",
			itemListElement: [
				{
					"@type": "Offer",
					itemOffered: {
						"@type": "Service",
						name: "Reflexologie plantaire",
						url: "https://lavoiedubienetre.be/shiatsu/amma",
						image: "https://lavoiedubienetre.be/img/massage-sur-chaise.webp",
						description: "Ce massage sur chaise au sein de votre entreprise, où chaque pression est conçu pour vous relaxer, vous détendre et procurer une sensation de libération.",
						offers: {
							"@type": "Offer",
							price: "20",
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
				name: "Qu'est-ce qu'un massage sur chaise en entreprise ?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "Le massage sur chaise en entreprise est une technique de massage rapide et efficace, généralement effectuée sur une chaise ergonomique spécialement conçue, qui permet de traiter le dos, les épaules, le cou, les bras et la tête du patient. Cette pratique est couramment offerte dans les lieux de travail pour réduire le stress et améliorer la productivité.",
				},
			},
			{
				"@type": "Question",
				name: "Quels sont les avantages du massage sur chaise pour les employés ?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "Les avantages incluent une réduction significative du stress, une diminution de l'anxiété, une amélioration de la concentration et de la productivité, ainsi qu'une diminution des douleurs liées à la posture de travail prolongée, comme les douleurs cervicales et lombaires.",
				},
			},
			{
				"@type": "Question",
				name: "Combien de temps dure un massage sur chaise ?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "Un massage sur chaise en entreprise dure généralement entre 10 et 20 minutes, ce qui permet de l'intégrer facilement dans une journée de travail sans perturber significativement l'emploi du temps des employés.",
				},
			},
			{
				"@type": "Question",
				name: "Le massage sur chaise nécessite-t-il une préparation spécifique par l'employé ?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "Non, aucune préparation spécifique n'est nécessaire. Les employés peuvent rester habillés et seuls les chaussures sont généralement retirées pour le confort durant le massage.",
				},
			},
			{
				"@type": "Question",
				name: "Comment une entreprise peut-elle mettre en place un service de massage sur chaise ?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "Pour mettre en place un service de massage sur chaise, l'entreprise doit contacter un prestataire de services de massage professionnel qui évaluera l'espace disponible et les besoins spécifiques de l'entreprise pour proposer une solution adaptée.",
				},
			},
			{
				"@type": "Question",
				name: "Y a-t-il des risques associés au massage sur chaise ?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "Le massage sur chaise est généralement très sûr. Cependant, les personnes ayant certaines conditions médicales spécifiques devraient consulter un professionnel de santé avant de participer à une séance.",
				},
			},
			{
				"@type": "Question",
				name: "Quelle est la fréquence recommandée pour le massage sur chaise en entreprise ?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "Une séance hebdomadaire est souvent recommandée pour obtenir des bénéfices continus, mais certains environnements de travail peuvent bénéficier de fréquences plus ou moins élevées selon le niveau de stress et les besoins des employés.",
				},
			},
			{
				"@type": "Question",
				name: "Le massage sur chaise est-il personnalisable selon les besoins individuels ?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "Oui, bien que le massage sur chaise soit généralement bref, le thérapeute peut adapter les techniques utilisées en fonction des tensions et des préférences de chaque employé.",
				},
			},
			{
				"@type": "Question",
				name: "Comment les employés se sentent-ils après un massage sur chaise ?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "La plupart des employés rapportent se sentir plus détendus, moins stressés et plus énergiques après un massage sur chaise. Cela peut également contribuer à une meilleure ambiance et coopération au travail.",
				},
			},
			{
				"@type": "Question",
				name: "Quelles mesures d'hygiène sont prises pour le massage sur chaise en entreprise ?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "Les prestataires de massage sur chaise en entreprise suivent généralement des protocoles d'hygiène stricts, incluant la désinfection de la chaise et du matériel utilisé entre chaque session, et l'utilisation de produits désinfectants pour les mains pour le thérapeute et les employés.",
				},
			},
		],
	},
];
