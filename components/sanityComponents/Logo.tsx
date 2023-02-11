import Image from "next/image";
import React from "react";

const Logo = (props: any) => {
  const { renderDefault, title } = props;
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <Image
        src="/assets/img/logo1.png"
        alt="Prestige Auto Care Logo"
        height={50}
        width={50}
        style={{
          borderRadius: "50%",
          objectFit: "cover",
        }}
      />
      <>{renderDefault(props)}</>
    </div>
  );
};

export default Logo;
