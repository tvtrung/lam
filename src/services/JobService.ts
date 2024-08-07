import http from 'utils/axios';
class JobService {
    getJobs() {
        return http.get('job');
    }

    getJobDetail(slug: string, preview: string) {
        return http.get(`get-job?slug=${slug}${preview === 'true' ? '&preview=true' : ''}`);
    }

    register(data: any) {
        return http.post('job/register', data, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
        });
    }
    getJobBySlug(slug: string) {
        return http.get(`single-job?slug=${slug}`);
    }

    submitContactForm7(data: any) {
        return http.post('/wp-json/contact-form-7/v1/contact-forms/336/feedback', data, {
            baseURL: process.env.NEXT_PUBLIC_HOST_URI_ONLY,
            headers: {
              'Content-Type': 'multipart/form-data'
            }
        });
    }
}

export default new JobService();
