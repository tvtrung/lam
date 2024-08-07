import http from 'utils/axios';
class AboutService {
    getAboutData(locale: string, preview: string) {
        let api = `about${preview === 'true' ? '?preview=true' : ''}`;
        if(locale !== 'vi') {
            api = `about?lang=${locale}${preview === 'true' ? '&preview=true' : ''}`;
        }
        return http.get(api);
    }
}

export default new AboutService();
