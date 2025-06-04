// tailwind.config.js
module.exports = {
    darkMode: 'class', // o 'media' si prefieres que siga el sistema operativo
    content: [
        './src/**/*.{html,ts}', // asegúrate de incluir todos tus archivos Angular
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#eef2ff',
                    100: '#e0e7ff',
                    200: '#c7d2fe',
                    300: '#a5b4fc',
                    400: '#818cf8',
                    500: '#6366f1',
                    600: '#4f46e5',  // DEFAULT
                    700: '#4338ca',
                    800: '#3730a3',
                    900: '#312e81',
                    DEFAULT: '#4f46e5',
                },
                secondary: {
                    500: '#ec4899',
                    DEFAULT: '#ec4899',
                },
            },
        },
    },
    plugins: [],
}
