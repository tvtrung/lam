import http from 'utils/axios';
class ServicesService {
    getServiceData(locale: string, preview: string) {
        let api = `service${preview === 'true' ? '?preview=true' : ''}`;
        if(locale !== 'vi') {
            api = `service?lang=${locale}${preview === 'true' ? '&preview=true' : ''}`;
        }
        return http.get(api);
    }
}

export default new ServicesService();
