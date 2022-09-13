window.klaroConfig = {
    version: 2,
    cookieName: 'klaro-i18n',
    elementID: 'klaro',
    storageName: 'klaro',
    storageMethod: 'localStorage',
    mustConsent: true,
    acceptAll: true,
    lang: 'en',
    default: true,
    noNotice: true,
    poweredBy:
        'https://github.com/KIProtect/klaro/blob/master/dist/configs/i18n.js',
    translations: {
        // these values will overwrite the defaults. For a full list, have a look
        // at the `src/translations` directory of this repo:
        // https://github.com/KIProtect/klaro/tree/master/src/translations
        zz: {
            privacyPolicyUrl: '/#/privacy',
        },
        de: {
            privacyPolicyUrl: '/#/privacy',
            consentModal: {
                title: 'Es gibt Cookies für dich',
                description:
                    'Dies ist die Beschreibung des Zustimmungs-Dialogs.',
                privacyPolicy: {
                    text:
                        'Dies ist der Text mit einem Link zu Ihrer {privacyPolicy}.',
                    name: 'Datenschutzerklärung (Name)',
                },
            },
            poweredBy: 'Konfiguration ansehen',
            ok: "Los geht's!",
            purposes: {
                livechat: 'Live-Chat',
            },
            googleFirebase: {
                description: 'Echtzeit-Datenbank für Live-Chat',
            },
        },
        en: {
            privacyPolicyUrl: '/#/privacy',
            consentModal: {
                title: 'There are Cookies for you',
                description: 'Cookies are necessary to authenticate you as user at Google-Firebase. They are necessary to use this live-chat application.',
                privacyPolicy: {
                    text: 'You will find our {privacyPolicy} here.',
                    name: 'privacy policy',
                },
            },
            poweredBy: 'view config',
            ok: 'Wohoo!',
            purposes: {
                liveChat: 'Livechat',
            },
            googleFirebase: {
                description: 'Cloud database storing chats',
            },
        },
    },
    services: [
        {
            name: 'googleFirebase',
            title: 'Google Firebase',
            purposes: ['liveChat'],
        },
    ],
    callback: function(consent, service) {
        if(service.name === 'googleFirebase' && consent === false){
            location.hash = '/';
            // sessionStorage.clear();
            // localStorage.clear();
            // cookie.split(";").forEach((c) => { 
            //     document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); 
            // });
        }
        console.log(
            'User consent for service ' + service.name + ': consent=' + consent
        );
    },
};