export const updateMetaTags = ({
  title,
  description,
  ogTitle,
  ogDescription,
  ogUrl,
}) => {
  if (title) {
    document.title = title;
  }
  if (description) {
    const metaDescription = document.querySelector("meta[name='description']");
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    }
  }
  if (ogTitle) {
    const metaOgTitle = document.querySelector("meta[property='og:title']");
    if (metaOgTitle) {
      metaOgTitle.setAttribute("content", ogTitle);
    }
  }
  if (ogDescription) {
    const metaOgDescription = document.querySelector(
      "meta[property='og:description']"
    );
    if (metaOgDescription) {
      metaOgDescription.setAttribute("content", ogDescription);
    }
  }

  if (ogUrl) {
    const metaOgUrl = document.querySelector("meta[property='og:url']");
    if (metaOgUrl) {
      metaOgUrl.setAttribute("content", ogUrl);
    }
  }
};
