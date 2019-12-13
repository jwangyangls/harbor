export interface ThemeInterface {
    showStyle: string;
    mode: string;
    text: string;
    currentFileName: string;
    toggleFileName: string;
}

export const themeArray: ThemeInterface[] = [
    {
        showStyle: 'LIGHT',
        mode: 'DARK', // show button icon
        text: 'DARK', // show button text
        currentFileName: 'light-theme.css', //
        toggleFileName: 'dark-theme.css',
    },
    {
        showStyle: 'DARK',
        mode: 'CUSTOM',
        text: 'CUSTOM',
        currentFileName: 'dark-theme.css',
        toggleFileName: 'customer.css'
    },

    {
        showStyle: 'CUSTOM',
        mode: 'LIGHT',
        text: 'LIGHT',
        currentFileName: 'customer.css',
        toggleFileName: 'light-theme.css'
    },
];
