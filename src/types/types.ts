export interface IVideos {
    video_id?: string;
    thumb: string,
    avatar: string,
    title: string,
    channel: string,
    views: string,
    time: string,
    color: string,
    description?: string,
    category?: string
}

export interface IVideosAPI {
    id: string;
    snippet: {
        title: string;
        channelId: string;
        thumbnails: {
            high: {
                url: string;
            }
            maxres: {
                url: string;
            }
        }
        channelTitle: string;
        publishedAt: string;
        description?: string;
        categoryId: string;
    },
    statistics: {
        viewCount: string;
    }
}

export interface IVideosSearch {
    id: {
        videoID: string;
    },
    snippet: {
        title: string;
        channelId: string;
        thumbnails: {
            high: {
                url: string;
            }
        }
        channelTitle: string;
        publishTime: string;
        description: string;
    }
}

export interface IShorts {
    thumb: string,
    title: string,
    views: string
}

export interface ICategories {
    id: string,
    name: string
}