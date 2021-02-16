import React from "react";

const Buttonsection = ({ currentPage, setPage, totalPages }) => {
  return (
    <div>
      <div className="btn-section container">
        <div className="left-item">
          <button
            disabled={currentPage === 1}
            onClick={() => setPage((page) => page - 1)}
          >
            Previous
          </button>
        </div>
        <div className="center-item">
          <p>{currentPage}</p>
        </div>
        <div className="right-item">
          <button
            disabled={currentPage === totalPages}
            onClick={() => setPage((page) => page + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Buttonsection;
