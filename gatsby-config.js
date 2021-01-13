module.exports = {
	siteMetadata: {
		title: 'MCS Gaming - A gaming team',
		author: 'MCSGaming',
		imageUrl: 'https://i.imgur.com/Vz81GEl.png',
		description: 'MCS Gaming - A gaming team',
		keywords: `Gaming, Diabotical, World of Warcraft`,
		twitter: 'https://twitter.com/',
		github: `https://github.com/`,
		medium: 'https://medium.com/',
		gatsby: 'https://www.gatsbyjs.org/',
		bulma: 'https://bulma.io/',
		siteUrl: `https://www.example.com`,
		discord: 'https://discord.gg/NaSXkBz'
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: 'MCS Gaming',
				short_name: 'MCS Gaming',
				start_url: '/',
				background_color: '#5f000b',
				theme_color: '#5f000b',
				display: 'standalone',
				icon: 'src/images/mcs-icon.png',
				orientation: 'portrait'
			}
		},
		`gatsby-plugin-sass`,
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: 'UA-XXXXXXXX-X',
				// Setting this parameter is optional (requried for some countries such as Germany)
				anonymize: true
			}
		},
		`gatsby-plugin-sitemap`
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.app/offline
		// 'gatsby-plugin-offline',
	]
};
