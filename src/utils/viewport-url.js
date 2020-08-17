/**
 * Customise the default viewport depending on which page the user is viewing
 */
export const handleViewportOnUrl = () => {
  switch (window.location.pathname) {
    case '/port-botany':
      return 'PB';
    case '/port-kembla':
      return 'PK';
    case '/cooks-river-intermodal-terminal':
      return 'CR';
    case '/enfield-intermodal-logistics-centre':
      return 'EN';
    default:
      return 'ALL';
  }
};

export const handleSiderLevelOnUrl = () => {
  switch (window.location.pathname) {
    case '/port-botany':
    case '/port-kembla':
    case '/cooks-river-intermodal-terminal':
    case '/enfield-intermodal-logistics-centre':
      return 2;
    default:
      return 1;
  }
};
