export interface HeroFrameConfig {
  frameCount: number;
  basePath: string;
  filePrefix: string;
  fileExtension: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
  preferredContact: "email" | "phone" | "whatsapp";
}

export interface PreloaderState {
  images: HTMLImageElement[];
  progress: number;
  isLoaded: boolean;
}
