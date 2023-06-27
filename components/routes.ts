interface Route {
    label: string
    url: string
    external: boolean
}

export interface RouteGroup {
    name: string
    routes: Route[]
}

const routes = [
    {
        name: 'Get involved',
        routes: [
            {
                label: "Calls",
                url: "/calls",
		external: false
            },
            {
                label: "Become a Sponsor",
                url: "/sponsors",
		external: false
            },
            {
                label: "Tweet!",
                url: "https://twitter.com/brightcon_media",
		external: true
            },
            {
                label: "Gitter",
                url: "https://gitter.im/brightway-lca/brightcon",
		external: true
            },
        ]
    },
    {
        name: 'This year',
        routes: [
            {
                label: "Programme",
                url: "/programme",
		external: false
            },
            {
                label: "Whats new in 2022",
                url: "/WhatsNewIn2022",
		external: false
            },
            {
                label: "Speakers",
                url: "/speakers",
		external: false
            },
            {
                label: "Awards",
                url: "/awards",
		external: false
            },
            {
                label: "What Happened in 2022",
                url: "/whathap",
		external: false
            },
            {
                label: "2022 Photos",
                url: "/Photos",
		external: false
            },

        ]
    },
    {
        name: 'Participate',
        routes: [
            {
                label: "Register",
                url: "/register",
		external: false
            },
            {
                label: "Venue",
                url: "/venue",
		external: false
            },
            {
                label: "Health Protection",
                url: "/HealthProtection",
		external: false
            },
        ]
    },
    {
        name: 'Hackathon',
        routes: [
            {
                label: "Details",
                url: "/hackathon",
		external: false
            },
            {
                label: "Dribdat",
                url: "https://hack.brightcon.link",
		external: true
            },
            {
                label: "Gitter",
                url: "https://gitter.im/brightway-lca/brightcon",
		external: true
            },
        ]
    },
    {
        name: 'Contest',
        routes: [
            {
                label: "Contest",
                url: "/contest",
		external: false
            },
            {
                label: "Results",
                url: "/contest-results",
		external: false
            },
        ]
    },
    {
        name: 'Legal',
        routes: [
            {
                label: "Code of conduct",
                url: "/code-of-conduct",
		external: false
            },
            {
                label: "Legal",
                url: "/legal",
		external: false
            },
        ]
    },
] as RouteGroup[]

export default routes
