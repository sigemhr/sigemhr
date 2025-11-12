// **production
// **development
// **testing
// **productionapi
// "homepage": "https://sil83.com/", //poner un package.json
export const productionMode:string = 'development';
let pathApiBase
let pathImages
let pathBase
let pathLogOutBase

switch (productionMode) {
    case 'development':
        pathApiBase ="http://192.168.101.104/hr_system/public/api/";
        pathImages ="http://192.168.101.104/hr_system/public/";
        // pathImages = 'https://apisil.sil83.com/api/';
        pathBase = ''
        pathLogOutBase = '/'
        break;
    case 'working':
        pathApiBase ="http://192.168.1.64/sigemhrapi/public/api/";
        pathImages ="http://192.168.1.64/sigemhrapi/public/";
        // pathImages = 'https://apisil.sil83.com/api/';
        pathBase = ''
        pathLogOutBase = '/'
        break;
   
    default:
        pathApiBase = 'http://192.168.100.40/apisil83/public/api/';
        pathImages = 'http://192.168.100.40/apisil83/public/';
        pathBase = ''
        pathLogOutBase = '/'
        // pathApiBase    = 'https://apisil.sil83.com/api/api/';
        // pathImages     = 'https://apisil.sil83.com/api/';
        // pathBase       = ''
        // pathLogOutBase = '/'
        break;
        
}

export const pathApi: string =pathApiBase;
export const path:string=pathBase;
export const pathLogOut:string=pathLogOutBase;
export const pathImagesb:string=pathImages;


