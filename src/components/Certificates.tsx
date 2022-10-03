import React from "react";
import CertificateLists from "./CertificateLists";
import img1 from "../../assets/certificates/javascript.jpg";
import img2 from "../../assets/certificates/react.jpg";
import img3 from "../../assets/certificates/ui-ux.jpg";
import img4 from "../../assets/certificates/typescript.jpg";

type Props = {};

const Certificates = (props: Props) => {
  const data = [
    { img: img1, title: "JavaScript", description: "JavaScript Description" },
    { img: img2, title: "React", description: "React Description" },
    { img: img3, title: "UI-UX", description: "UI-UX Description" },
    { img: img4, title: "TypeScript", description: "TypeScript Description" },
  ];

  return (
    <div id="certificates" className="w-full ">
      <div className="mx-auto px-2 py-5">
        <h1 className="text-xl font-thin pt-3 md:py-5 mx-auto text-center font-serif tracking-widest uppercase">
          Licenses and Certification
        </h1>
        <div className="grid md:grid-cols-2 gap-8 md:p-10 lg:px-60 contrast-200">
          {/* Items */}
          <CertificateLists data={data} />
        </div>
      </div>
    </div>
  );
};

export default Certificates;
