const formatText = (text: string) => {
    const trim = text.trim();

    return trim.toLowerCase();
}


const titleToSlug = (title: string) => {
    let slug;

    slug = formatText(title);
    slug = slug.replace(/\`|\~|\!|\@|\#|\||\$|\%|\^|\&|\*|\(|\)|\+|\=|\,|\.|\/|\?|\>|\<|\'|\"|\:|\;|_/gi, '');
    slug = slug.replace(/ /gi, "-");
    
    slug = slug.replace(/\-\-\-\-\-/gi, '-');
    slug = slug.replace(/\-\-\-\-/gi, '-');
    slug = slug.replace(/\-\-\-/gi, '-');
    slug = slug.replace(/\-\-/gi, '-');

    slug = '@' + slug + '@';
    slug = slug.replace(/\@\-|\-\@|\@/gi, '');
    return slug;
}
const title = "This is a special title, isn't it?";
const slug = titleToSlug(title);
console.log(slug);

export {
    formatText,
    titleToSlug
}