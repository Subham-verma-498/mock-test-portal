declare module 'jsmediatags' {
  const jsmediatags: {
    read: (
      file: File | Blob | string,
      callbacks: {
        onSuccess: (tag: {
          tags: {
            title?: string;
            artist?: string;
            album?: string;
            picture?: {
              data: number[];
              format: string;
            };
          };
        }) => void;
        onError: (error: any) => void;
      }
    ) => void;
  };
  export default jsmediatags;
}
