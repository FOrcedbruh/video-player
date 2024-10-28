import { IVideo } from "./IVideo";

export interface IVideoStore {
    video: IVideo | null,
    setVideo: (video: IVideo) => void
}