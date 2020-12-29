export function setButtonStyling(status) {
    if (status === 'primary') {
        return {
            background: `#ECB390`,
            color: `#303030`
        } 
    } else if (status === 'secondary') {
        return {
            background: `#FFFFFF`,
            color: `#303030`
        }
    }
}