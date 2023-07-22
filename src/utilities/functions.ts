import moment from "moment";
import { IVideos, IVideosAPI, IVideosSearch } from "../types/types";
import axios from "axios";

const colors = ['red', 'blue', 'pink', 'green', 'gray', 'orange', 'brown'];

export function selectRandomColors() {
    const index = Math.floor(Math.random() * colors.length);
    const random = colors[index];
    return random
}

export async function loadVideosAPI(url: string) {
    try {
        const response = await axios.get(url)
        return response.data.items
    } catch(error) {
        console.log(error)
        alert('Erro ao carregar os vídeos da API do Youtube');
        return [];
    }
}

export async function loadChannelImages(videos: any) {
    try {
        const channelArray = videos.map((item: any) => (item.snippet.channelId));
        const imagesArray = channelArray.map(async (item: string) => await axios.get(`https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${item}&key=AIzaSyDeTcmAPDBl7cmV-R4OeGGn8xS5Q_FaifE`))  
        
        const resolved = await Promise.all(imagesArray)

        const channelImages = resolved.map((res) => {
            const imageUrl = res.data.items[0]?.snippet?.thumbnails?.high?.url || res.data.items[0]?.snippet?.thumbnails?.default?.url;
            return imageUrl || '';
        })
        
        return channelImages
    } catch(error) {
        console.log(error)
        alert('Erro ao carregar a imagem do canal');
        return [];
    }
}

function convertVideos(videos: Array<IVideosAPI>, images: Array<string>) {
    return videos.map((item: IVideosAPI, index: number) => ({
        video_id: item.id,
        thumb: item.snippet.thumbnails.maxres?.url || item.snippet.thumbnails.high?.url,
        avatar: images[index],
        title: item.snippet.title,
        channel: item.snippet.channelTitle,
        views: item.statistics.viewCount,
        time: item.snippet.publishedAt,
        color: selectRandomColors(),
        category: item.snippet.categoryId,
        description: item.snippet.description
    }))
}

function convertSearchVideos(videos: Array<IVideosSearch>, images: Array<string>) {
    return videos.map((item: IVideosSearch, index: number) => ({
        video_id: item.id.videoID,
        thumb: item.snippet.thumbnails.high?.url,
        avatar: images[index],
        title: item.snippet.title,
        channel: item.snippet.channelTitle,
        views: 'Sem',
        time: item.snippet.publishTime,
        color: selectRandomColors(),
        category: '',
        description: item.snippet.description
    }))
}

export function getAllVideos(videosDB: Array<IVideos>, videosAPI: Array<IVideosAPI>, images: Array<string>) {
    const convertedVideosAPI = convertVideos(videosAPI, images);
    // console.log(convertedVideosAPI)
    const vid = [...videosDB, ...convertedVideosAPI]
    const tam = () => (vid.length >= 60 ? 60 : vid.length)
    for (let i = vid.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [vid[i], vid[j]] = [vid[j], vid[i]];
    }
    return vid.slice(0, tam())
}

export function getAllSearchVideos(videosDB: Array<IVideos>, videosAPI: Array<IVideosSearch>, images: Array<string>) {
    const convertedVideosAPI = convertSearchVideos(videosAPI, images);
    const vid = [...videosDB, ...convertedVideosAPI]
    const tam = () => {
        if (vid.length >= 50) {
            return 50
        } else {
            return vid.length
        }
    }
    for (let i = vid.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [vid[i], vid[j]] = [vid[j], vid[i]];
    }
    return vid.slice(0, tam())
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