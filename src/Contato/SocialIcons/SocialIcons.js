import FACEBOOK     from './facebook.png';
import INSTAGRAM    from './instagram.png';
import LINKEDIN     from './linkedin.png';
import PINTEREST    from './pinterest.png';
import SPOTIFY      from './spotify.png';
import TIKTOK       from './tiktok.png';
import TWITTER      from './twitter.png';
import VK           from './vk.png';
import WHATSAPP     from './whatsapp.png';
import YOUTUBE      from './youtube.png';

export default function SocialIcons(id) {
    switch(id){
        case 'facebook':
            return FACEBOOK
        case 'instagram':
            return INSTAGRAM
        case 'linkedin':
            return LINKEDIN
        case 'pinterest':
            return PINTEREST
        case 'spotify':
            return SPOTIFY
        case 'tiktok':
            return TIKTOK
        case 'twitter':
            return TWITTER
        case 'vk':
            return VK
        case 'whatsapp':
            return WHATSAPP
        case 'youtube':
            return YOUTUBE
        default:
            return null  
    }
};
