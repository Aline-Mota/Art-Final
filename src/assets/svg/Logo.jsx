import * as React from "react";

function SvgComponent(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={27} height={40} viewBox="0 0 27 40" {...props}>
      <g data-name="Group 101" transform="translate(-375 -21)">
        <rect data-name="Rectangle 16" width={13} height={8} rx={4} transform="translate(375 53)" fill="#104ba3" />
        <rect data-name="Rectangle 11" width={20} height={8} rx={4} transform="translate(382 21)" fill="#104ba3" />
        <rect data-name="Rectangle 15" width={20} height={8} rx={4} transform="translate(382 37)" fill="#63ceff" />
        <rect data-name="Rectangle 12" width={8} height={8} rx={4} transform="translate(375 29)" fill="#007cc4" />
      </g>
    </svg>
  );
}

export default SvgComponent;

// 007cc4 azul mais claro
// 63ceff azul ainda mais claro
// 4cd5c5 verde agua
// 104ba3azul escuro