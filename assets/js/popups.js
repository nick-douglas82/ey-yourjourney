import Popup from './Popup';

export default {
    'main': [
        /*new Popup({
            ref: 'popup_ref',
            type: 'popup',
            title: {
                text: 'Title',
                styles: {
                    fontSize: '2.625em',
                    color: '#ffffff',
                    marginBottom: '26px'
                }
            },
            content: {
                text: '<p>Lorem ipsum.</p>',
                styles: {
                    fontSize: '0.75em',
                    color: '#ffffff'
                }
            },
            link: {
                text: 'Learn more',
                url: 'https://www.google.co.uk',
                target: '_blank',
                styles: {
                    borderColor: '#ffffff',
                    fontSize: '0.75em'
                }
            },
            backgroundImage: 'popups/.jpg',
            backgroundBlur: true,
            internalRef: ''
        }),*/
        new Popup({
            ref: 'learning',
            type: 'popup',
            title: {
                text: 'Learning',
                styles: {
                    fontSize: '2.625em',
                    color: '#ffffff',
                    marginBottom: '26px'
                }
            },
            content: {
                text: '<p>At EY, we’re  helping you learn continuously to stay relevant and grow your skills for the future. We’re  investing in learning that will help you achieve your career aspirations - and make your exceptional EY experience even better.</p>',
                styles: {
                    fontSize: '0.75em',
                    color: '#ffffff'
                }
            },
            link: {
                text: 'Learn more',
                url: 'https://sites.ey.com/sites/LEAD/SitePages/Development.aspx#/development',
                target: '_blank',
                styles: {
                    borderColor: '#ffffff',
                    fontSize: '0.75em'
                }
            },
            backgroundImage: 'popups/Learning.jpg',
            backgroundBlur: true,
            internalRef: ''
        }),
        new Popup({
            ref: 'global',
            type: 'popup',
            title: {
                text: 'Global mobility',
                styles: {
                    fontSize: '2.625em',
                    color: '#ffffff',
                    marginBottom: '26px'
                }
            },
            content: {
                text: '<p>Working across cultures and borders expands your perspectives, providing a broader view of the world and the international business that connects it, as well as developing global business skills and knowledge that benefit you — both professionally and personally.</p>',
                styles: {
                    fontSize: '0.75em',
                    color: '#ffffff'
                }
            },
            link: {
                text: 'Learn more',
                url: 'https://sites.ey.com/sites/globalmobility/SitePages/Home.aspx',
                target: '_blank',
                styles: {
                    borderColor: '#ffffff',
                    fontSize: '0.75em'
                }
            },
            backgroundImage: 'popups/Global Mobility.jpg',
            backgroundBlur: true,
            internalRef: ''
        }),
        new Popup({
            ref: 'badges',
            type: 'popup',
            title: {
                text: 'EY Badges',
                styles: {
                    fontSize: '2.625em',
                    color: '#ffffff',
                    marginBottom: '26px'
                }
            },
            content: {
                text: '<p>EY​ Badges help you open a ​world of possibilities and ​​​stand out from the crowd by earning digital badges for future-focused skills like data visualization, data science and artificial intelligence.</p>',
                styles: {
                    fontSize: '0.75em',
                    color: '#ffffff'
                }
            },
            link: {
                text: 'Learn more',
                url: 'https://internal.ey.net/sites/EyBadges/Pages/index.html#/',
                target: '_blank',
                styles: {
                    borderColor: '#ffffff',
                    fontSize: '0.75em'
                }
            },
            backgroundImage: 'popups/EY Badges.jpg',
            backgroundBlur: true,
            internalRef: ''
        }),
        new Popup({
            ref: 'counselors',
            type: 'popup',
            title: {
                text: 'Counselors',
                styles: {
                    fontSize: '2.625em',
                    color: '#ffffff',
                    marginBottom: '26px'
                }
            },
            content: {
                text: '<p>Open and honest conversations with your counselor can help you create exceptional career experiences and shape your career journey. Your counselor will help you identify performance expectations, what you want to achieve and how you want to grow and progress in your career.</p>',
                styles: {
                    fontSize: '0.75em',
                    color: '#ffffff'
                }
            },
            link: {
                text: 'Learn more',
                url: 'https://sites.ey.com/sites/LEAD/SitePages/Conversations.aspx',
                target: '_blank',
                styles: {
                    borderColor: '#ffffff',
                    fontSize: '0.75em'
                }
            },
            backgroundImage: 'popups/Counselor.jpg',
            backgroundBlur: true,
            internalRef: ''
        }),
        new Popup({
            ref: 'ripples',
            type: 'popup',
            title: {
                text: 'EY Ripples',
                styles: {
                    fontSize: '2.625em',
                    color: '#ffffff',
                    marginBottom: '26px'
                }
            },
            content: {
                text: '<p>EY Ripples,  is a corporate responsibility program that offers exciting new ways to use your knowledge, skills and experience to change lives for the better.</p>',
                styles: {
                    fontSize: '0.75em',
                    color: '#ffffff'
                }
            },
            link: {
                text: 'Learn more',
                url: 'https://eyripples.eyclienthub.com/',
                target: '_blank',
                styles: {
                    borderColor: '#ffffff',
                    fontSize: '0.75em'
                }
            },
            backgroundImage: 'popups/Corporate Responsibility.jpg',
            backgroundBlur: true,
            internalRef: ''
        }),
        new Popup({
            ref: 'diversity',
            type: 'popup',
            title: {
                text: 'Diversity and Inclusiveness',
                styles: {
                    fontSize: '2.625em',
                    color: '#ffffff',
                    marginBottom: '26px'
                }
            },
            content: {
                text: '<p>Diverse and inclusive teams make the working world better. Leveraging different perspectives fuels innovation, fosters collaboration and strengthens relationships. At EY, each of us has a role to play in advancing diversity and inclusiveness and creating an environment where all people can feel a sense of belonging.</p>',
                styles: {
                    fontSize: '0.75em',
                    color: '#ffffff'
                }
            },
            link: {
                text: 'Learn more',
                url: 'https://sites.ey.com/sites/GlobalDI/SitePages/Community%20Home.aspx',
                target: '_blank',
                styles: {
                    borderColor: '#ffffff',
                    fontSize: '0.75em'
                }
            },
            backgroundImage: 'popups/Diversity and Inclusion.jpg',
            backgroundBlur: true,
            internalRef: ''
        }),
        new Popup({
            ref: 'flexibility',
            type: 'popup',
            title: {
                text: 'Flexibility',
                styles: {
                    fontSize: '2.625em',
                    color: '#ffffff',
                    marginBottom: '26px'
                }
            },
            content: {
                text: '<p>At EY, flexibility is about working smarter. We combine innovative changes with enhanced technology to create an environment that supports you wherever you need to work. We have created agile ways of working to give you the flexibility you need to achieve vitality  in your professional and personal life.</p>',
                styles: {
                    fontSize: '0.75em',
                    color: '#ffffff'
                }
            },
            link: {
                text: 'Learn more',
                url: 'https://www.ey.com/Publication/vwLUAssets/ey-flexibility-makes-it-all-possible-updated/%24File/ey-flexibility-makes-it-all-possible.pdf',
                target: '_blank',
                styles: {
                    borderColor: '#ffffff',
                    fontSize: '0.75em'
                }
            },
            backgroundImage: 'popups/Flexibility.jpg',
            backgroundBlur: true,
            internalRef: ''
        }),
        new Popup({
            ref: 'helix',
            type: 'popup',
            title: {
                text: 'EY Helix',
                styles: {
                    fontSize: '2.625em',
                    color: '#ffffff',
                    marginBottom: '26px'
                }
            },
            content: {
                text: '<p>The EY Helix, platform is one way analytics is transforming audit. Critically, the use of analytics across EY member firms is guided by one principle: it is not about tools looking for issues, but about  auditors considering what the analyzed data means and assessing its implication to the audit.</p>',
                styles: {
                    fontSize: '0.75em',
                    color: '#ffffff'
                }
            },
            link: {
                text: 'Learn more',
                url: 'https://www.ey.com/en_gl/audit/technology/helix',
                target: '_blank',
                styles: {
                    borderColor: '#ffffff',
                    fontSize: '0.75em'
                }
            },
            backgroundImage: 'popups/EY Helix.jpg',
            backgroundBlur: true,
            internalRef: ''
        }),
        new Popup({
            ref: 'ai',
            type: 'popup',
            title: {
                text: 'Artificial intelligence',
                styles: {
                    fontSize: '2.625em',
                    color: '#ffffff',
                    marginBottom: '26px'
                }
            },
            content: {
                text: '<p>Artificial intelligence inspires new ways of operating and growing a business. EY teams work with clients to incorporate robotic, intelligent and autonomous capabilities that will transform the way they operate in order to thrive in the in the Transformative Age.</p>',
                styles: {
                    fontSize: '0.75em',
                    color: '#ffffff'
                }
            },
            link: {
                text: 'Learn more',
                url: 'https://www.ey.com/en_gl/digital/what_s-the-right-dose-of-ai-to-revitalize-health-care',
                target: '_blank',
                styles: {
                    borderColor: '#ffffff',
                    fontSize: '0.75em'
                }
            },
            backgroundImage: 'popups/Artificial Intelligence.jpg',
            backgroundBlur: true,
            internalRef: ''
        }),
        new Popup({
            ref: 'analytics',
            type: 'popup',
            title: {
                text: 'Analytics',
                styles: {
                    fontSize: '2.625em',
                    color: '#ffffff',
                    marginBottom: '26px'
                }
            },
            content: {
                text: '<p>Predictive analytics and machine learning can create new efficiencies for all kinds of businesses. EY teams are working with clients around the world to unlock the value of previously untapped operational data to help  deliver greater efficiency and effectiveness.</p>',
                styles: {
                    fontSize: '0.75em',
                    color: '#ffffff'
                }
            },
            link: {
                text: 'Learn more',
                url: 'https://www.ey.com/en_gl/global-review/2018/data-harbors-the-answer',
                target: '_blank',
                styles: {
                    borderColor: '#ffffff',
                    fontSize: '0.75em'
                }
            },
            backgroundImage: 'popups/Analytics.jpg',
            backgroundBlur: true,
            internalRef: ''
        }),
        new Popup({
            ref: 'mentors',
            type: 'popup',
            title: {
                text: 'Mentors and sponsors',
                styles: {
                    fontSize: '2.625em',
                    color: '#ffffff',
                    marginBottom: '26px'
                }
            },
            content: {
                text: '<p>Mentors and sponsors are both important elements of your career journey. Mentors can be a key resource for guidance, advice and support while sponsors can provide opportunities for growth and advancement.</p>',
                styles: {
                    fontSize: '0.75em',
                    color: '#ffffff'
                }
            },
            link: {
                text: 'Learn more',
                url: 'https://sites.ey.com/sites/LEAD/SitePages/career.aspx',
                target: '_blank',
                styles: {
                    borderColor: '#ffffff',
                    fontSize: '0.75em'
                }
            },
            backgroundImage: 'popups/Mentors and counsellors.jpg',
            backgroundBlur: true,
            internalRef: ''
        }),
    ]
}
