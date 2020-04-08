const { REACT_APP_API_ROOT } = process.env;

const config = {
    API_ROOT: REACT_APP_API_ROOT,
    API_LANGUAGES: [
        {
            id: 1,
            title: "UZB",
            code: 'uz'
        },
        {
            id: 2,
            title: 'RUS',
            code: 'ru'
        },
    ]
};

export default config;


