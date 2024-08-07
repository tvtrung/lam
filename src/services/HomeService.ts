import http from 'utils/axios';
class HomeService {
    getHomeData(locale: string, preview: string) {
        let api = `home${preview === 'true' ? '?preview=true' : ''}`;
        if(locale !== 'vi') {
            api = `home?lang=${locale}${preview === 'true' ? '&preview=true' : ''}`;
        }
        return http.get(api);
    }

    getSiteMap() {
        return http.get('get-sitemap-routes');
    }
}

export default new HomeService();
