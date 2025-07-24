import PT_BR_DESKTOP from './pt-BR.mp4';
import PT_BR_MOBILE from './mobile_pt-BR.mp4';
import EN_DESKTOP from './en.mp4';
import EN_MOBILE from './mobile_en.mp4';
import ZH_HANS_DESKTOP from './zh-Hans.mp4';
import ZH_HANS_MOBILE from './mobile_zh-Hans.mp4';

export default function VideoSelector(language, mobile) {
    switch(language){
        case 'en':
            return mobile ? EN_MOBILE : EN_DESKTOP;
        case 'zh-Hans':
            return mobile ? ZH_HANS_MOBILE : ZH_HANS_DESKTOP;
        default:
            return mobile ? PT_BR_MOBILE : PT_BR_DESKTOP;    
    }
};
