export class Work {
    id: string;
    title: string;
    slug: string;
    full_image: string;
    lazy_image: string;
    default_image: string;
    thumb_image: string;
    year: string;
    technologies: any;

    /**
     * Constructor
     * 
     * @param work
     */
    constructor(work?) {
        work = work || {};
        this.id = work.id || '';
        this.title = work.title || '';
        this.slug = work.slug || '';
        this.full_image = work.full_image || '';
        this.lazy_image = work.lazy_image || '';
        this.default_image = work.default_image || '';
        this.thumb_image = work.thumb_image || '';
        this.year = work.year || '';
        this.technologies = work.technologies || null;
    }
}