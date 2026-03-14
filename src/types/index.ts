export interface HeroFrameConfig {
  frameCount: number;
  basePath: string;
  filePrefix: string;
  fileExtension: string;
}

export interface PreloaderState {
  images: HTMLImageElement[];
  progress: number;
  isLoaded: boolean;
}
