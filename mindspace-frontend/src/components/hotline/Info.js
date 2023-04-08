import React from "react";

const Info = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-[#9472A2] to-[#6a5ca5] text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-6xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        The Indian government has been working towards providing comprehensive support to individuals facing mental health crises. Mental health is an area of growing concern in India, with a significant number of people facing mental health issues such as anxiety, depression, and other disorders. In response to this, the Indian government has introduced various initiatives to address the issue of mental health in the country.
        </p>

        <br />

        <p className="text-xl">
        One of the critical initiatives taken by the Indian government is the National Mental Health Program (NMHP). Launched in 1982, the program aims to provide affordable mental health care services to people across the country, especially those living in rural areas. The program focuses on developing mental health infrastructure, training mental health professionals, and increasing awareness about mental health issues. Additionally, the Indian government has also launched a 24/7 toll-free helpline, the Arogya Sahayavani, which provides support to individuals facing mental health issues, as well as their families and caregivers. These initiatives are a step towards building a more supportive and inclusive mental health ecosystem in India.
        </p>
      </div>
    </div>
  );
};

export default Info;
