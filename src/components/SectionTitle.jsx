import React from "react";

const SectionTitle = ({ title }) => {
  return (
    <h2 className="secetion-title text-3xl font-semibold text-violet-500 mb-5">
      {title}
    </h2>
  );
};

export default React.memo(SectionTitle);
