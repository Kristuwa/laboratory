
import check from "../../images/check.svg";
import "./Modal.module.scss";

const Modal = ({setIsOpen}) => {
	return <div className="backdrop">
		<div className="modal" onClick={() => setIsOpen(false)}>
	<img src={check} alt="check" />
	<p className="text">Спасибо за предоставленную информацию, мы свяжемсяс вами в ближайшее время.</p>
		</div>
	</div>
};

export default Modal;