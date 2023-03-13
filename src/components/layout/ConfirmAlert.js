import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

function ConfirmAlert({ handleDeleteProduct, setChoseDelete }) {
  confirmAlert({
    customUI: ({ onClose }) => {
      return (
        <div className="react-confirm-alert-body">
          <h3>Delete  </h3>
          <p>Are you sure want to delete this product?</p>
          <div className="react-confirm-alert-button-group">
            <button
              onClick={() => {
                setChoseDelete(false);
                onClose();
              }}
            >
              No
            </button>
            <button
              id="btn-confirm-delete-cart"
              onClick={() => {
                handleDeleteProduct();
                onClose();
                setChoseDelete(false);
              }}
            >
              Yes
            </button>
          </div>
        </div>
      );
    },
  });
}
export default ConfirmAlert;
