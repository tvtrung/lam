import http from 'utils/axios';
class HeaderService {
    getMenu() {
        return http.get('get-menus');
    }

    getOptions(locale: string) {
        let api = 'get-options';
        if(locale !== 'vi') {
            api = api + `?lang=${locale}`;
        }
        return http.get(api);
    }
}

export default new HeaderService();
