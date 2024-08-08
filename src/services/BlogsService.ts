import http from 'utils/axios';
class BlogsService {
    getBlog(id: number) {
        return http.get(`blog?id=${id}`);
    }
    getBlogPreview(id: number) {
        return http.get(`blog?id=${id}&preview=true`);
    }

    getBlogIds() {
        return http.get(`blogs/ids`);
    }

    getBlogs(type: string, page: number, limit: number) {
        return http.get(`blogs?type=${type}&page=${page}&limit=${limit}`);
    }

    getCategories(page: number, limit: number) {
        return http.get(`categories?&page=${page}&limit=${limit}`);
    }

    getBlogsByCategory(slug: string, type: string, page: number, limit: number) {
        return http.get(`blogs/category?cate=${slug}&type=${type}&page=${page}&limit=${limit}`);
    }

    postLike(post_id: string, type_like: string) {
        return http.post(`set-post-like`, { post_id: post_id, type_like: type_like });
    }
}

export default new BlogsService();
