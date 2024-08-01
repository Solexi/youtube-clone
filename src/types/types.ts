import { StaticImageData } from "next/image";

interface CommentProps {
    name: string;
    avatar: string | StaticImageData;
    content: string;
    timestamp: string;
    likes: number;
    dislikes: number;
    replies?: CommentProps[];
}

interface VideoProps {
    title: string;
    channelName: string;
    channelAvatar: string | StaticImageData;
    views: number;
    datePosted: string;
    thumbnail: string | StaticImageData;
    description: string;
    likes: number;
    dislikes: number;
    duration: string;
    tags: string[];
    subscribers: number;
    comments: CommentProps[];
}

interface ThumbnailCardProps {
    thumbnail: string | StaticImageData;
    title: string;
    avatar: any;
    channelName: string;
    views: number;
    datePosted: string;
    duration: string;
    hideAvatar?: boolean;
    small?: boolean;
    mobileView?: boolean;
}
export type {
    CommentProps,
    VideoProps,
    ThumbnailCardProps
}