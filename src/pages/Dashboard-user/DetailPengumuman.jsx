import React from "react";

const DetailPengumuman = (props) => {
  const { item } = props.location.state;
  return (
    <div>
      <h1>Detail Pengumuman</h1>
      <h2>{item.id}</h2>
      <h2>{item.judul}</h2>
      <h2>{item.isi}</h2>
    </div>
  );
};

export default DetailPengumuman;
