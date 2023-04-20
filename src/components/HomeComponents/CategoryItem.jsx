import React from 'react';

function CategoryItem({ category }) {
  return (
    <p className="cursor-pointer rounded-full bg-white/10 p-1 pl-3 pr-3 before:content-['#'] hover:bg-white/30">
      {category}
    </p>
  );
}

export default CategoryItem;
