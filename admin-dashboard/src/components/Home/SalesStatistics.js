import React from "react";

const SaleStatistics = () => {
  return (
    <div className="col-xl-6 col-lg-12">
      <div className="card mb-4 shadow-sm">
        <article className="card-body">
          <h5 className="card-title">Sale statistics</h5>
          <iframe
            style={{
              background: "#FFFFFF",
              border: "none",
              borderRadius: "2px",
              width: "100%",
              height: "350px",
            }}
            src="https://charts.mongodb.com/charts-sports-shop-fprgq/embed/charts?id=63536fa1-2ea0-4526-8409-ccb8674f9461&maxDataAge=3600&theme=light&autoRefresh=true"            title="myFrame"
          ></iframe>
        </article>
      </div>
    </div>
  );
};

export default SaleStatistics;
