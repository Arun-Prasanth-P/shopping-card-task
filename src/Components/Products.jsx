import React, { useState } from "react";

const Products = ({ cart, setCart, product }) => {
  let [dismissCart, setDismissCart] = useState(true);
  return (
    <>
      
      <div className="col mb-5">
        <div className="card h-100">
          {product.sale ? (
            <>
              <div className="badge bg-dark text-white position-absolute end-0 m-2 ">
                Sale
              </div>
            </>
          ) : (
            ""
          )}
         
          <img className="card-img-top" src={product.image} alt="..." />
          <div className="card-body p-4">
            <div className="text-center">
            
              <h5 className="card-title fw-bold">{product.name}</h5>
              
              {product.ratings ? (
                <>
                  <div className="d-flex justify-content-center text-warning mb-3 small ">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                </>
              ) : (
                ""
              )}
       
              {product.discount ? (
                <div>
                  <span className="text-secondary text-decoration-line-through">
                    {product.mrp}
                  </span>
                  {product.sellingPrice}
                </div>
              ) : (
                product.sellingPrice
              )}
            </div>
          </div>
      
          <div className="card-footer bg-transparent border-top-0 px-3 pb-3 ">
            <div className="text-center">
              {product.category === true ? (
                <button
                  className="btn btn-outline-dark mt-auto"
                  onClick={() => {}}
                >
                  View Options
                </button>
              ) : dismissCart ? (
                <button
                  className="btn btn-outline-success mt-auto"
                  onClick={() => {
                    setCart(cart + 1);
                    setDismissCart(false);
                  }}
                >
                  Add to Cart
                </button>
              ) : (
                <button
                  className="btn btn-outline-danger mt-auto"
                  onClick={() => {
                    setCart(cart - 1);
                    setDismissCart(true);
                  }}
                >
                  Remove from Cart
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;