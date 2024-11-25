/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js}'],
    theme: {
        container: {
            center: true,
            padding: '15px',
            screens: {
                sm: '375px',
                md: '575px',
                lg: '767px',
                xl: '1200px',
            },
        },
        colors: {
            primary: '#f78222',
            secondary: '#8bc540',
            black: '#121618',
            white: '#FFFFFF',
        },
        extend: {
            fontSize: {
                '4xl': ['40px', '1'],
            },
        },
    },
    plugins: [],
};
