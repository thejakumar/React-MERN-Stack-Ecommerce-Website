import React from "react";

const ProductsStatistics = () => {
  return (
    <div className="col-xl-6 col-lg-12">
      <div className="card mb-4 shadow-sm">
        <article className="card-body">
          <h5 className="card-title">Products statistics</h5>
          <iframe
            style={{
              background: "#FFFFFF",
              border: "none",
              borderRadius: "2px",
              width: "100%",
              height: "350px",
            }}
            src="https://charts.mongodb.com/charts-sports-shop-fprgq/embed/charts?id=6353718b-2ea0-4fdf-87ec-ccb86755660f&maxDataAge=3600&theme=light&autoRefresh=true"            title="myFrame"
          ></iframe>
        </article>
      </div>
    </div>
  );
};

export default ProductsStatistics;
