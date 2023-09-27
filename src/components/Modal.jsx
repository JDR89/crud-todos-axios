
export const Modal = ({ onChange, onSubmit}) => {

    

  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Edit task
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
          <form onSubmit={onSubmit} className="mt-3">
      <div className="mb-3">
        <div className="d-flex justify-content-between align-items-center"></div>
        <div className="container">
          <div className="row">
            <div className="col-8">
              <input
                
                type="text"
                className="form-control me-2"
                id="text"
                name="text"
                onChange={onChange}
                required
                
              />
            </div>
            <div className="col-4">
              <select
                className="form-select"
                id="urgency"
                name="urgency"
                onChange={onChange}
                required
                
              >
                <option value="" disabled>Select urgency</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cancelar
            </button>
            <button
              onClick={onSubmit}
              type="submit"
              data-bs-dismiss="modal"
              className="btn btn-success "
            >
              Guardar cambios
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
