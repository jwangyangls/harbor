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
        mode: 'LIGHT',
        text: 'LIGHT',
        currentFileName: 'dark-theme.css',
        toggleFileName: 'light-theme.css'
    },
    // {
    //     showStyle: 'LIGHT',
    //     mode: 'DARK',
    //     text: 'DARK',
    //     fileName: 'light-theme.css',
    // },
    // {
    //     showStyle: 'DARK',
    //     mode: 'SPECIAL',
    //     text: 'SPECIAL',
    //     fileName: 'dark-theme.css.css',
    // },
    // {
    //     showStyle: 'SPECIAL',
    //     mode: 'LIGHT',
    //     text: 'LIGHT',
    //     fileName: '.css',
    // },
];
