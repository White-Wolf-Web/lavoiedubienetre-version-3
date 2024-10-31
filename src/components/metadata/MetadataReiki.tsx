export const MetadataReiki = [
	{
		"@context": "https://schema.org",
		"@type": "HealthAndBeautyBusiness",
		name: "Séance de Reiki à Halle - Halle",
		description: "Séance de Reiki à Halle - Halle. Découvrez nos soins personnalisés et retrouvez harmonie, bien-être et sérénité dans un cadre apaisant.",
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
			name: "Séances de Reiki",
			itemListElement: [
				{
					"@type": "Offer",
					itemOffered: {
						"@type": "Service",
						name: "Reiki",
						url: "https://lavoiedubienetre.be/reiki",
						description: "Au cœur d'un monde en perpétuel mouvement, le Reiki émerge comme un phare de tranquillité, offrant une voie vers l'équilibre et la sérénité. ",
						offers: {
							"@type": "Offer",
							price: "49",
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
				name: "Qu'est-ce que le Reiki exactement ?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "Le Reiki est une technique japonaise de guérison énergétique qui favorise la détente, réduit le stress et soutient le processus naturel de guérison du corps en transférant l'énergie universelle à travers les paumes.",
				},
			},
			{
				"@type": "Question",
				name: "Combien de temps dure une séance de Reiki ?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "Une séance typique de Reiki dure entre 60 et 90 minutes. Durant cette période, les clients peuvent expérimenter une relaxation profonde.",
				},
			},
			{
				"@type": "Question",
				name: "Le Reiki nécessite-t-il un contact physique ?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "Le Reiki peut être administré avec un contact physique léger ou sans contact, selon les préférences du receveur. L'énergie peut être transférée à courte distance.",
				},
			},
			{
				"@type": "Question",
				name: "Peut-on ressentir des effets immédiats avec le Reiki ?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "Beaucoup ressentent une sensation immédiate de calme et de relaxation après une séance de Reiki. Des bénéfices plus profonds peuvent être observés avec des séances régulières.",
				},
			},
			{
				"@type": "Question",
				name: "Y a-t-il des contre-indications au Reiki ?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "Le Reiki est considéré comme sûr pour la plupart des gens et peut compléter d'autres formes de traitement médical ou thérapeutique, mais il ne doit pas remplacer les soins médicaux nécessaires.",
				},
			},
			{
				"@type": "Question",
				name: "Le Reiki peut-il aider à gérer la douleur ?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "Oui, le Reiki est souvent utilisé pour aider à gérer la douleur et l'inconfort en favorisant la relaxation et en aidant le corps à retrouver son équilibre naturel.",
				},
			},
			{
				"@type": "Question",
				name: "Dois-je croire au Reiki pour que cela fonctionne ?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "Non, vous n'avez pas besoin de croire au Reiki pour que les séances soient bénéfiques. L'ouverture d'esprit peut améliorer votre expérience, mais l'énergie fonctionne indépendamment des croyances personnelles.",
				},
			},
			{
				"@type": "Question",
				name: "Le Reiki est-il lié à une religion ?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "Non, le Reiki n'est pas lié à une religion spécifique. Il est basé sur des principes spirituels universels et peut être pratiqué par des personnes de toutes croyances ou sans croyance religieuse.",
				},
			},
			{
				"@type": "Question",
				name: "Comment puis-je choisir un praticien de Reiki ?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "Recherchez un praticien de Reiki certifié qui a une bonne réputation et avec qui vous vous sentez à l'aise. N'hésitez pas à poser des questions sur leur formation et leur expérience.",
				},
			},
		],
	},
];
