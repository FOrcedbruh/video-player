import { create } from "zustand";
import { IVideoStore } from "../types/IVideStore";



export const useVideoStore = create<IVideoStore>((set) => ({
    video: null,
    setVideo: (video) => set({video})
}))