export default {
    state: {
        languages: [
            {
                title: 'English',
                abr: 'en'
            },
            {
                title: 'Polish',
                abr: 'pl'
            },
            {
                title: 'German',
                abr: 'de'
            },
            {
                title: 'Ukrainian',
                abr: 'ukr'
            },
            {
                title: 'Russian',
                abr: 'ru'
            }
        ],
        selectedLanguage: {
            title: 'English',
            abr: 'en'
        }
    },
    mutations: {
        setLanguage(state, key) {
            state.selectedLanguage = state.languages.find(el => el.abr === key);
        }
    },
    actions: {
        setLangKey({state, commit}, data) {
            localStorage.setItem('lang', data);

            location.reload();
        }
    },
    getters: {
        getLangKey() {
            return localStorage.getItem('lang');
        },
        getLanguages(state) {
            return state.languages;
        },
        getSelectedLanguage(state) {
            return state.selectedLanguage;
        }
    }
}