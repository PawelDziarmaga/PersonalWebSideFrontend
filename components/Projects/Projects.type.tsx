export type propsType = {
	attributes: {
		title: string;
		img: {
			data: {
				attributes: {
					formats: { small: { url: string; name: string } };
				};
			};
		};
		urlGitFront: string;
		urlGitBack: string;
		urlWebFront: string;
		urlWebBack: string;
		Frontend: boolean;
		Backend: boolean;
		typescript: boolean;
		react: boolean;
		styledComponents: boolean;
		redux: boolean;
		localStorage: boolean;
		framerMotion: boolean;
		reactHotToast: boolean;
		node: boolean;
		strapi: boolean;
		cloudinary: boolean;
		graphql: boolean;
		auth0: boolean;
		stripe: boolean;
		tekst1: boolean;
		tekst2: boolean;
		tekst3: boolean;
	};
};
