export const pageSelector = data => ({...data?.strapiPage || {}, allFile: data?.allFile?.nodes || []})
