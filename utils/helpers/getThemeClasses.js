function getThemeClasses(theme) {

    let slugString = 'violet'

    if (theme?.length > 0) {

        if (typeof theme === 'object') {
            slugString = theme[0].slug
        } else {
            slugString = theme
        }
        
    }

    let themeClasses = {}

    switch (slugString) {
        case 'violet':
            themeClasses = {
                bg: 'bg-violet-500 text-white selection:bg-violet-700',
                cursor: '#ff7a00',
                highlights: 'text-orange-500 selection:bg-orange-500 selection:text-violet-500'
            };
            break;
        case 'turquoise':
            themeClasses = {
                bg: 'bg-turquoise-500 text-white selection:bg-turquoise-600',
                cursor: '#514e7b',
                highlights: 'text-purple-500 selection:bg-purple-500 selection:text-turquoise-500'
            };
            break;
        case 'green':
            themeClasses = {
                bg: 'bg-green-500 text-white selection:bg-green-700',
                cursor: '#f4fe65',
                highlights: 'text-yellow-500 selection:bg-yellow-500 selection:text-green-500'
            };
            break;
    }

    return themeClasses
}

export default getThemeClasses