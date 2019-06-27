import Scene from './Scene';

export default {
    main: [
        new Scene({
            ref: 'introduction-scene-home',
            title: 'Homepage',
            type: 'scene',
            backgroundImage: 'TITLE SCREEN.jpg',//'https://placehold.co/1920x800/red/lightpink',
            additionalClasses: [],
            components: [
                {
                    type: 'logo',
                    src: 'logo.svg',//'https://placehold.co/69x81/green/white',
                    alt: 'EY Your Journey',
                    position: ['absolute', 'bottom', 'right']
                },
                {
                    type: 'betterquestion',
                    text: 'What if your career didn’t follow a familiar path, but created a new one?',
                    components: [
                        {
                            type: 'scenebutton',
                            title: 'Tap to continue',
                            goToScene: 'introduction-scene-intro',
                            position: ['bottom', 'right']
                        },
                    ]
                }
            ]
        }),
        new Scene({
            ref: 'introduction-scene-intro',
            title: 'Homepage',
            type: 'scene',
            backgroundImage: 'TITLE SCREEN.jpg',//'https://placehold.co/1920x800/green/white',
            backgroundBlur: true,
            additionalClasses: [ 'flex', 'items-start', 'content-center', 'f-col' ],
            components: [
                {
                    type: 'logo',
                    src: 'logo.svg',//'https://placehold.co/69x81/green/palegreen',
                    alt: 'EY Your Journey',
                    position: ['absolute', 'bottom', 'right']
                },
                {
                    type: 'textinfo',
                    content: 'Welcome to Your Journey! The work we do is changing. Opportunities exist in every direction. As transformation disrupts entire industries, we want you to gain experience in new areas and pursue many journeys to leadership. Explore the stories of others who have done just that. You can bookmark the pop-ups to learn more about the key elements that shaped their journeys - and be part of yours, too.',
                    fontSize: '1em',
                    weight: 300,
                    align: 'left',
                    color: '#ffffff',
                    lineheight: 1.3,
                    marginBottom: '40px',
                    order: 1,
                    width: '60%'
                },
                {
                    type: 'scenebutton',
                    title: 'Tap to continue',
                    goToScene: 'onboarding-scene-1',
                    order: 2
                }
            ]
        }),
        new Scene({
            ref: 'introduction-scene-mobile-rotate',
            title: 'Homepage',
            type: 'scene',
            backgroundImage: 'TITLE SCREEN.jpg',//'https://placehold.co/1920x800/blue/lightblue',
            backgroundBlur: true,
            additionalClasses: [ 'flex', 'items-center', 'content-center', 'f-col' ],
            components: [
                {
                    type: 'logo',
                    src: 'logo.svg',//'https://placehold.co/69x81/green/white',
                    alt: 'EY Your Journey',
                    position: ['absolute', 'bottom', 'right']
                },
                {
                    type: 'textinfo',
                    content: 'This experience is optimized for mobile devices. Please rotate your phone.',
                    fontSize: '1.625em',
                    weight: 300,
                    align: 'center',
                    color: '#ffffff',
                    lineheight: 1.3,
                    order: 1
                },
                {
                    type: 'icon',
                    iconname: 'rotate-arrow',
                    order: 0
                }
            ]
        }),
        new Scene({
            ref: 'introduction-scene-desktop-warning',
            title: 'Homepage',
            type: 'scene',
            backgroundImage: 'TITLE SCREEN.jpg',//'https://placehold.co/1920x800/green/white',
            backgroundBlur: true,
            additionalClasses: [ 'flex', 'items-center', 'content-center', 'f-col' ],
            components: [
                {
                    type: 'logo',
                    src: 'logo.svg',//'https://placehold.co/69x81/green/palegreen',
                    alt: 'EY Your Journey',
                    position: ['absolute', 'bottom', 'right']
                },
                {
                    type: 'textinfo',
                    content: '360&deg; footage is not supported on your current <br />browser and is best viewed on a smartphone. <br />Please visit ey.com/yourjourney on your mobile <br />device to enjoy the full experience.',
                    fontSize: '1.125em',
                    weight: 300,
                    align: 'center',
                    color: '#ffffff',
                    lineheight: 1.3,
                    marginBottom: '40px',
                    order: 1
                },
                {
                    type: 'scenebutton',
                    title: 'Close',
                    goToScene: 'introduction-scene-intro',
                    order: 2
                },
                {
                    type: 'icon',
                    iconname: 'exclamation-mark',
                    order: 0
                }
            ]
        }),
        new Scene({
            ref: 'onboarding-scene-1',
            title: 'Onboarding',
            type: 'threesixty',
            backgroundImage: 'TUTORIAL SCREEN.jpg',//'https://placehold.co/600x400/grey/lightestgrey',
            backgroundOverlay: {
                opacity: 0.5,
                'background-color': '#000000'
            },
            components: [
            ]
        }),
        new Scene({
            ref: 'navigation-scene-bookmarks',
            title: 'Bookmarks',
            type: 'scene',
            backgroundImage: 'TUTORIAL SCREEN.jpg',//'https://placehold.co/1920x800',
            backgroundOverlay: {
                opacity: 0.5,
                'background-color': '#000000'
            },
            components: [
                {
                    type: 'logo',
                    src: 'logo.svg',//'https://placehold.co/69x81/green/white',
                    alt: 'EY Your Journey',
                    position: ['absolute', 'top', 'right']
                },
                {
                    type: 'scenebutton',
                    title: 'View journeys',
                    goToScene: 'navigation-scene-journey-select',
                    position: ['absolute', 'bottom', 'right']
                },
                {
                    type: 'navslider',
                    title: '',
                    visibleJourneys: 4,
                    navigation: []
                }
            ]
        }),
        new Scene({
            ref: 'navigation-scene-journey-select',
            title: 'Explore journeys',
            type: 'scene',
            backgroundImage: 'TUTORIAL SCREEN.jpg',//'https://placehold.co/1920x800',
            backgroundOverlay: {
                opacity: 0.5,
                'background-color': '#000000'
            },
            components: [
                {
                    type: 'logo',
                    src: 'logo.svg',//'https://placehold.co/69x81/green/white',
                    alt: 'EY Your Journey',
                    position: ['absolute', 'top', 'right']
                },
                {
                    type: 'scenebutton',
                    title: 'View my bookmarks',
                    goToScene: 'navigation-scene-bookmarks',
                    position: ['absolute', 'bottom', 'right']
                },
                {
                    type: 'navslider',
                    title: 'Explore journeys',
                    visibleJourneys: 4,
                    navigation: [
                        {
                            title: {
                                text: '&ldquo;Kiara&rdquo;'
                            },
                            subtitle: {
                                //text: 'Illustrating the positive effect <u>disruption</u> can have on a career journey.'
                                text: 'Disruption',
                            },
                            backgroundImage: 'videos/Kiara - Disruption.jpg',//'https://placehold.co/1920x800/purple/white',
                            goToScene: 'video-scene-kiara-disruption'
                        },
                        {
                            title: {
                                text: '&ldquo;Zac&rdquo;'
                            },
                            subtitle: {
                                //text: 'Depicting that a sense of <u>purpose</u> can lead to opportunities.'
                                text: 'Purpose',
                            },
                            backgroundImage: 'videos/Zac - Purpose.jpg',//'https://placehold.co/1920x800/blue/white',
                            goToScene: 'video-scene-zac-purpose'
                        },
                        {
                            title: {
                                text: '&ldquo;Daniel&rdquo;'
                            },
                            subtitle: {
                                //text: 'Portraying how a passion for <u>technology</u> can make a difference.'
                                text: 'Technology',
                            },
                            backgroundImage: 'videos/Daniel - Technology.jpg',//'https://placehold.co/1920x800/red/white',
                            goToScene: 'video-scene-daniel-technology'
                        },
                        {
                            title: {
                                text: '&ldquo;Janet&rdquo;'
                            },
                            subtitle: {
                                //text: 'Representing the way a curious <u>mindset</u> can open new doors.'
                                text: 'Mindset',
                            },
                            backgroundImage: 'videos/Janet - Assurance.jpg',//'https://placehold.co/1920x800/orange/white',
                            goToScene: 'video-scene-janet-assurance'
                        },
                    ]
                }
            ]
        }),
        new Scene({
            ref: 'video-scene-kiara-disruption',
            title: 'Kiara - Disruption',
            type: 'videoscene',
            preloader: {
                backgroundImage: 'videos/Kiara - Disruption.jpg',//'https://placehold.co/1920x800/blue/white',
                additionalClasses: [ 'flex', 'f-col', 'content-center' ],
                components: [
                    {
                        type: 'textinfo',
                        content: '&ldquo;Kiara&rdquo;',
                        fontSize: '2.625em',
                        align: 'left',
                        color: '#ffffff',
                        lineheight: 1.2,
                    },
                    {
                        type: 'textinfo',
                        content: 'Illustrating the positive effect <u>disruption</u> can have on a career journey.',//<br />Tap to start &rarr;',
                        fontSize: '0.75em',
                        align: 'left',
                        color: '#ffffff',
                        lineheight: 1.2,
                    },
                ],
            },
            video: {
                src: 'https://bcsecure04-a.akamaihd.net/22/1066292269001/201904/97/1066292269001_6024166492001_6021590959001.mp4?pubId=1066292269001&videoId=6021590959001',
                type: 'video/mp4',
                poster: 'videos/Kiara - Disruption.jpg',
                brightcoveId: '6021590959001',
                subtitles: 'kiara.en.vtt',
                popups: [
                    {
                        name: 'marker_01',
                        timeToDisplay: 30,
                        timeToHide: 40,
                        popupRef: "diversity",
                        marker: {
                            visible: false,
                            direction: 'w',
                            depth: 2,
                            translation: [
                                { name: 'X', coords: 1 },
                                { name: 'Y', coords: 0 },
                            ], //XYZ
                        }
                    },
                    {
                        name: 'marker_02',
                        timeToDisplay: 48,
                        timeToHide: 58,
                        popupRef: "badges",
                        marker: {
                            visible: false,
                            direction: 'w',
                            depth: 2,
                            translation: [
                                { name: 'X', coords: 0.5 },
                                { name: 'Y', coords: 0 },
                            ], //XYZ
                        }
                    },
                    {
                        name: 'marker_03',
                        timeToDisplay: 58,
                        timeToHide: 68,
                        popupRef: "analytics",
                        marker: {
                            visible: false,
                            direction: 'w',
                            depth: 2,
                            translation: [
                                { name: 'X', coords: -1 },
                                { name: 'Y', coords: 0 },
                            ], //XYZ
                        }
                    },
                    {
                        name: 'marker_04',
                        timeToDisplay: 61,
                        timeToHide: 75,
                        popupRef: "counselors",
                        marker: {
                            visible: false,
                            direction: 's',
                            depth: 2,
                            translation: [
                                { name: 'X', coords: -0.5 },
                                { name: 'Y', coords: 0 },
                            ], //XYZ
                        }
                    },
                ],
            }
        }),
        new Scene({
            ref: 'video-scene-zac-purpose',
            title: 'Zac - Purpose',
            type: 'videoscene',
            preloader: {
                backgroundImage: 'videos/Zac - Purpose.jpg',//'https://placehold.co/1920x800/blue/white',
                additionalClasses: [ 'flex', 'f-col', 'content-center' ],
                components: [
                    {
                        type: 'textinfo',
                        content: '&ldquo;Zac&rdquo;',
                        fontSize: '2.625em',
                        align: 'left',
                        color: '#ffffff',
                        lineheight: 1.2,
                    },
                    {
                        type: 'textinfo',
                        content: 'Depicting that a sense of <u>purpose</u> can lead to opportunities.',//<br />Tap to start &rarr;',
                        fontSize: '0.75em',
                        align: 'left',
                        color: '#ffffff',
                        lineheight: 1.2,
                    },
                ],
            },
            video: {
                src: 'https://bcsecure04-a.akamaihd.net/22/1066292269001/201904/3129/1066292269001_6024166496001_6021595008001.mp4?pubId=1066292269001&videoId=6021595008001',
                type: 'video/mp4',
                poster: 'videos/Zac - Purpose.jpg',
                brightcoveId: '6021595008001',
                subtitles: 'zac.en.vtt',
                popups: [
                    {
                        name: 'marker_05',
                        timeToDisplay: 18,
                        timeToHide: 28,
                        popupRef: "ripples",
                        marker: {
                            visible: false,
                            direction: 'w',
                            depth: 2,
                            translation: [
                                { name: 'X', coords: 1 },
                                { name: 'Y', coords: 0 },
                            ], //XYZ
                        }
                    },
                    {
                        name: 'marker_06',
                        timeToDisplay: 43,
                        timeToHide: 53,
                        popupRef: "mobility",
                        marker: {
                            visible: false,
                            direction: 'w',
                            depth: 2,
                            translation: [
                                { name: 'X', coords: -1 },
                                { name: 'Y', coords: 0 },
                            ], //XYZ
                        }
                    },
                    {
                        name: 'marker_07',
                        timeToDisplay: 58,
                        timeToHide: 68,
                        popupRef: "learning",
                        marker: {
                            visible: false,
                            direction: 's',
                            depth: 2,
                            translation: [
                                { name: 'X', coords: -1 },
                                { name: 'Y', coords: 0 },
                            ], //XYZ
                        }
                    },
                    {
                        name: 'marker_08',
                        timeToDisplay: 72,
                        timeToHide: 82,
                        popupRef: "badges",
                        marker: {
                            visible: false,
                            direction: 'e',
                            depth: 2,
                            translation: [
                                { name: 'X', coords: -1 },
                                { name: 'Y', coords: 0 },
                            ], //XYZ
                        }
                    },
                ],
            }
        }),
        new Scene({
            ref: 'video-scene-daniel-technology',
            title: 'Daniel - Technology',
            type: 'videoscene',
            preloader: {
                backgroundImage: 'videos/Daniel - Technology.jpg',//'https://placehold.co/1920x800/blue/white',
                additionalClasses: [ 'flex', 'f-col', 'content-center' ],
                components: [
                    {
                        type: 'textinfo',
                        content: '&ldquo;Daniel&rdquo;',
                        fontSize: '2.625em',
                        align: 'left',
                        color: '#ffffff',
                        lineheight: 1.2,
                    },
                    {
                        type: 'textinfo',
                        content: 'Portraying how a passion for <u>technology</u> can make a difference.',//<br />Tap to start &rarr;',
                        fontSize: '0.75em',
                        align: 'left',
                        color: '#ffffff',
                        lineheight: 1.2,
                    },
                ],
            },
            video: {
                src: 'https://bcsecure04-a.akamaihd.net/22/1066292269001/201904/895/1066292269001_6024171774001_6022006423001.mp4?pubId=1066292269001&videoId=6022006423001',
                type: 'video/mp4',
                poster: 'videos/Daniel - Technology.jpg',
                brightcoveId: '6022006423001',
                subtitles: 'daniel.en.vtt',
                popups: [
                    {
                        name: 'marker_09',
                        timeToDisplay: 20,
                        timeToHide: 30,
                        popupRef: "flexibility",
                        marker: {
                            visible: false,
                            direction: 'w',
                            depth: 2,
                            translation: [
                                { name: 'X', coords: 1 },
                                { name: 'Y', coords: 0 },
                            ], //XYZ
                        }
                    },
                    {
                        name: 'marker_10',
                        timeToDisplay: 34,
                        timeToHide: 44,
                        popupRef: "counselors",
                        marker: {
                            visible: false,
                            direction: 'w',
                            depth: 2,
                            translation: [
                                { name: 'X', coords: -1 },
                                { name: 'Y', coords: 0 },
                            ], //XYZ
                        }
                    },
                    {
                        name: 'marker_11',
                        timeToDisplay: 43,
                        timeToHide: 53,
                        popupRef: "ai",
                        marker: {
                            visible: false,
                            direction: 'w',
                            depth: 2,
                            translation: [
                                { name: 'X', coords: 1 },
                                { name: 'Y', coords: 0 },
                            ], //XYZ
                        }
                    },
                    {
                        name: 'marker_12',
                        timeToDisplay: 53,
                        timeToHide: 63,
                        popupRef: "mobility",
                        marker: {
                            visible: false,
                            direction: 'w',
                            depth: 2,
                            translation: [
                                { name: 'X', coords: -1 },
                                { name: 'Y', coords: 0 },
                            ], //XYZ
                        }
                    },
                    {
                        name: 'marker_13',
                        timeToDisplay: 86,
                        timeToHide: 96,
                        popupRef: "badges",
                        marker: {
                            visible: false,
                            direction: 'e',
                            depth: 2,
                            translation: [
                                { name: 'X', coords: 1 },
                                { name: 'Y', coords: 0 },
                            ], //XYZ
                        }
                    },
                ],
            }
        }),
        new Scene({
            ref: 'video-scene-janet-assurance',
            title: 'Janet - Assurance ',
            type: 'videoscene',
            preloader: {
                backgroundImage: 'videos/Janet - Assurance.jpg',//'https://placehold.co/1920x800/blue/white',
                additionalClasses: [ 'flex', 'f-col', 'content-center' ],
                components: [
                    {
                        type: 'textinfo',
                        content: '&ldquo;Janet&rdquo;',
                        fontSize: '2.625em',
                        align: 'left',
                        color: '#ffffff',
                        lineheight: 1.2,
                    },
                    {
                        type: 'textinfo',
                        content: 'Representing the way a curious <u>mindset</u> can open new doors.',//<br />Tap to start &rarr;',
                        fontSize: '0.75em',
                        align: 'left',
                        color: '#ffffff',
                        lineheight: 1.2,
                    }
                ]
            },
            video: {
                src: 'https://bcsecure04-a.akamaihd.net/22/1066292269001/201904/2015/1066292269001_6024170875001_6021585687001.mp4?pubId=1066292269001&videoId=6021585687001',
                type: 'video/mp4',
                poster: 'videos/Janet - Assurance.jpg',
                brightcoveId: '6021585687001',
                subtitles: 'janet.en.vtt',
                popups: [
                    {
                        name: 'marker_14',
                        timeToDisplay: 50,
                        timeToHide: 70,
                        popupRef: "helix",
                        marker: {
                            visible: false,
                            direction: 'w',
                            depth: 2,
                            translation: [
                                { name: 'X', coords: 1 },
                                { name: 'Y', coords: 0 },
                            ], //XYZ
                        }
                    },
                    {
                        name: 'marker_15',
                        timeToDisplay: 99,
                        timeToHide: 109,
                        popupRef: "mentors",
                        marker: {
                            visible: false,
                            direction: 'n',
                            depth: 2,
                            translation: [
                                { name: 'X', coords: -1 },
                                { name: 'Y', coords: 0 },
                            ], //XYZ
                        }
                    },
                    {
                        name: 'marker_16',
                        timeToDisplay: 104,
                        timeToHide: 114,
                        popupRef: "learning",
                        marker: {
                            visible: false,
                            direction: 'n',
                            depth: 2,
                            translation: [
                                { name: 'X', coords: 1 },
                                { name: 'Y', coords: 0 },
                            ], //XYZ
                        }
                    },
                    {
                        name: 'marker_17',
                        timeToDisplay: 120,
                        timeToHide: 130,
                        popupRef: "flexibility",
                        marker: {
                            visible: false,
                            direction: 'n',
                            depth: 2,
                            translation: [
                                { name: 'X', coords: -1 },
                                { name: 'Y', coords: 0 },
                            ], //XYZ
                        }
                    },
                    {
                        name: 'marker_18',
                        timeToDisplay: 144,
                        timeToHide: 154,
                        popupRef: "diversity",
                        marker: {
                            visible: false,
                            direction: 'w',
                            depth: 2,
                            translation: [
                                { name: 'X', coords: -1 },
                                { name: 'Y', coords: 0 },
                            ], //XYZ
                        }
                    },
                ],
            }
        }),
    ]
}
