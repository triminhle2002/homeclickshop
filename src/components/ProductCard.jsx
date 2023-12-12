import React from "react";

const ProductCard = ({ productInfo = {} }) => {
  return (
    <a
      href={`/productDetail/${productInfo?.id}`}
      className="p-1 border shadow-md rounded-md bg-white cursor-pointer hover:translate-y-1 transition-all"
    >
      <div className="w-full h-[200px]">
        <img
          src={productInfo?.imagePreview}
          alt="imagePreview"
          className="h-full w-full object-cover rounded-md block border"
        />
      </div>
      <div className="p-2 flex flex-col gap-1">
        <h4 className="text-gray-500 font-bold name text-sm">
          {productInfo?.name}
        </h4>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-gray-500 text-xs">Đã bán: </span>
            <span className="text">{productInfo?.sold}</span>
          </div>
          <div className="flex items-center gap-1">
            {productInfo?.rating && (
              <>
                <span className="text-sm">
                  {productInfo?.rating.toFixed(1)}
                </span>

                <span className="text-yellow-400">
                  <p>Icon</p>
                </span>
              </>
            )}
          </div>
        </div>

        {productInfo?.price ? (
          <div className="text-base font-bold">
            ₫ {productInfo?.price?.$numberDecimal}
          </div>
        ) : (
          <div className="text-base font-bold">
            ₫ {productInfo?.minPrice?.$numberDecimal} - ₫{" "}
            {productInfo?.maxPrice?.$numberDecimal}
          </div>
        )}
      </div>
    </a>
  );
};

export default ProductCard;
