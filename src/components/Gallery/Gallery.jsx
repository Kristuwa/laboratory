import React from "react";

const Gallery = React.forwardRef(({ ...props }, galleryRef) => {
	return (
	  <section ref={galleryRef}>
</section>
	);
 });
 
 export default Gallery;