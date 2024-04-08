import React from "react";
import FormContainer from "../FormContainer/FormContainer";

const Request = React.forwardRef(({ ...props }, requestRef) => {
	return (
	  <section className="request" ref={requestRef}>
		<div className="container">
			<h2 className="title">Заявка на диагностику</h2>
			<p className="text">Доверьте свои медицинские исследования надежным капибарам-лаборантам и получите качественные результаты в кратчайшие сроки!</p>
			<FormContainer setIsOpenModal={props}/>
		</div>
</section>
	);
 });
 
 export default Request;