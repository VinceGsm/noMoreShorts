function clean() {
    try {
        [...document.querySelectorAll('ytd-grid-video-renderer')].forEach(e => {    
            if (e.querySelector('ytd-thumbnail-overlay-time-status-renderer').getAttribute('overlay-style') === 'SHORTS') {
                e.remove();
                console.log("Short removed !");
            }
        });
    } catch (error) {
      const message = "An unexpected error occurred!";
      throw new Error(message, {cause : error});
    }
}
//clean();