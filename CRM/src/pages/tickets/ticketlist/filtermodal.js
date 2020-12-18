import React from "react";

const FilterModal = ({ handleInputChange, users, clients, handleSearch,startdate, enddate,on}) => {
  return (
    <div
      className="modal fixed-right fade pt-0"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      role="dialog"
    >
      <div className="modal-dialog modal-dialog-aside">
        <div className="modal-content" style={{ width: "350px" }}>
          <div className="modal-body">
            <div className="card p-3">
              <label
                htmlFor="customer"
                style={{ display: "block" }}
                className="font-weight-bold"
              >
                Customer
              </label>
              <input
                list="customers"
                name="searchUser"
                id="searchUser"
                onChange={handleInputChange}
                placeholder="Search..."
                className="form-control"
              />
              <datalist id="customers">
                {users.map((user, i) => (
                  <option
                    key={i}
                    value={user.firstname + " " + user.lastname}
                  />
                ))}
                {clients.map((client, i) => (
                  <option key={i} value={client.businessname} />
                ))}
              </datalist>

              <label
                htmlFor="ticketid"
                style={{ display: "block" }}
                className="mt-3 font-weight-bold"
              >
                Ticket ID
              </label>
              <input
                className="form-control"
                type="text"
                id="myInput"
                onChange={handleInputChange}
                placeholder="Search..."
                title="Type in something"
              />

              <form onSubmit={handleSearch}>
                <div className="form-group mt-3">
                  <label
                    htmlFor="startdate"
                    style={{ display: "block" }}
                    className="font-weight-bold"
                  >
                    Start Date
                  </label>
                  <div className="input-group">
                    <input
                      type="date"
                      className="form-control alt alt_right"
                      name="startdate"
                      id="startdate"
                      placeholder="Start Date"
                      value={startdate}
                      onChange={handleInputChange}
                    />
                    <span className="input-group-text bg-white alt">
                      <i className="fas fa-calendar fa-fw"></i>
                    </span>
                  </div>
                </div>

                <div className="form-group mt-1">
                  <label
                    htmlFor="startdate"
                    style={{ display: "block" }}
                    className="font-weight-bold"
                  >
                    End Date
                  </label>
                  <div className="input-group">
                    <input
                      type="date"
                      className="form-control alt alt_right"
                      name="enddate"
                      id="enddate"
                      placeholder="End Date"
                      value={enddate}
                      onChange={handleInputChange}
                    />
                    <span className="input-group-text bg-white alt">
                      <i className="fas fa-calendar fa-fw"></i>
                    </span>
                  </div>
                </div>

                <div className="form-group mt-1">
                  <label
                    htmlFor="exactdate"
                    style={{ display: "block" }}
                    className="font-weight-bold"
                  >
                    Created On
                  </label>
                  <div className="input-group">
                    <input
                      type="date"
                      className="form-control alt alt_right"
                      name="on"
                      id="on"
                      placeholder="Exact Date"
                      value={on}
                      onChange={handleInputChange}
                    />
                    <span className="input-group-text bg-white alt">
                      <i className="fas fa-calendar fa-fw"></i>
                    </span>
                  </div>
                </div>

                <div className="form-group mt-1">
                  <label
                    htmlFor="type"
                    style={{ display: "block" }}
                    className="font-weight-bold"
                  >
                    Ticket Type
                  </label>
                  <select
                    onChange={handleInputChange}
                    name="type"
                    id="type"
                    className="custom-select custom-select-md"
                    defaultValue=""
                  >
                    <option value="">-- Select --</option>
                    <option value="complaint">Complaint</option>
                    <option value="enquiry">Enquiry</option>
                    <option value="support">Support</option>
                  </select>
                </div>

                <div className="form-group mt-1 text-right">
                  <button
                    type="submit"
                    className="btn btn-primary btn-md"
                    style={{ cursor: "pointer", fontSize: "16px" }}
                  >
                    Search
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;
