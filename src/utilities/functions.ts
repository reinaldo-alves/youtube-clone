import moment from "moment";

export function selectRandom(array:Array<any>) {
    const index = Math.floor(Math.random() * array.length);
    const random = array[index];
    return random
}

export function getCurrentDateTime() {
    const now = new Date();
    
    const year = now.getUTCFullYear();
    const month = String(now.getUTCMonth() + 1).padStart(2, '0');
    const day = String(now.getUTCDate()).padStart(2, '0');
    const hours = String(now.getUTCHours()).padStart(2, '0');
    const minutes = String(now.getUTCMinutes()).padStart(2, '0');
    const seconds = String(now.getUTCSeconds()).padStart(2, '0');

    return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}Z`;
}

export function convertViews(views: string): string {
    const viewsNumber = Number(views)
    if (viewsNumber >= 1000000) {
        return `${(viewsNumber / 1000000).toFixed(0)} mi de`;
    } else if (viewsNumber >= 10000) {
        return `${(viewsNumber / 1000).toFixed(0)} mil`;
    } else if (viewsNumber >= 1000) {
        const viewsDiv = (viewsNumber / 1000).toFixed(1);
        const viewsStr = viewsDiv.toString().replace('.', ',')
        if (viewsStr[viewsStr.length -1] === '0') {
            return `${viewsStr.slice(0, -2)} mil`
        } else {
            return `${viewsStr} mil`;
        }
    } else {
        return viewsNumber.toString()
    }
}

export function convertTime(time: string) {
    const now = moment();
    const convTime = moment(time);
    const diffDays = now.diff(convTime, 'days');

    if (diffDays <= 0) {
        return 'hoje';
    } else if (diffDays === 1) {
        return 'há 1 dia';
    } else if (diffDays <= 7) {
        return `há ${diffDays} dias`
    } else if (diffDays <= 30) {
        const diffWeeks = Math.floor(diffDays / 7);
        if (diffWeeks === 1) {
            return 'há 1 semana'
        } else {
            return `há ${diffWeeks} semanas`
        }
    } else if (diffDays <= 365) {
        const diffMonths = Math.floor(diffDays / 30);
        if (diffMonths === 1) {
            return 'há 1 mês'
        } else {
            return `há ${diffMonths} meses`
        }
    } else {
        const diffYears = Math.floor(diffDays / 365);
        if (diffYears === 1) {
            return 'há 1 ano'
        } else {
            return `há ${diffYears} anos`
        }
    }
}