import React, { forwardRef } from "react";
import { FaHandsHelping, FaExternalLinkAlt } from "react-icons/fa";
import ShinyText from "../ShinyText/ShinyText";
import StarBorder from "../StarBorder/StarBorder";

<StarBorder as="button" className="custom-class" color="cyan" speed="5s">
  // content
</StarBorder>;

const Reports = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="max-w-[1240px] mx-auto mt-20 md:mt-24 lg:mt-32">
      {/* heading  */}
      <div className="">
        <div className="w-fit mx-auto py-[6px] px-[20px] flex items-center justify-center bg-[#282732] gap-2 rounded-[16px]">
          <div>
            <FaHandsHelping />
          </div>
          <h3>What I have done</h3>
        </div>
        <h1 className="text-[30px] md:text-[48px] text-center font-bold">
          My Papers & Reports
        </h1>
      </div>
      {/* content  */}
      <div className="p-3 flex flex-col gap-2">
        {/* card  */}
        {/* report 1  */}
        <StarBorder as="div" className="custom-class" color="white" speed="5s">
          <div className="p-4 mb-3 flex flex-col gap-2">
            <div className="flex justify-between">
              <h1 className="text-2xl text-left font-bold">
                Deep Learning for Artwork Classification{" "}
              </h1>
              <h2 className="font-bold">2025 - PRESENT</h2>
            </div>
            <h2 className="font-bold text-left">Project Lead</h2>
            <p className="text-left">
              The project applies advanced machine learning models like AlexNet,
              ResNet, and Vision Transformers to classify digital artworks from
              the WikiArt dataset across 21 distinct art styles, with
              EfficientNet yielding the best results.
            </p>
            <a
              target="_blank"
              href="https://www.linkedin.com/feed/update/urn:li:activity:7283766125438418944/"
            >
              <div className="bg-[#EBF3FA] px-4 py-2 w-fit text-center flex items-center gap-2 rounded-lg">
                <FaExternalLinkAlt className="text-black" />
                <ShinyText
                  text="View Report"
                  disabled={false}
                  speed={3}
                  className="custom-class"
                  size={14}
                  textColor="black"
                />
              </div>
            </a>
          </div>
        </StarBorder>
        {/* report 2  */}
        <StarBorder as="div" className="custom-class" color="white" speed="5s">
          <div className="p-4 mb-3 flex flex-col gap-2">
            <div className="flex justify-between">
              <h1 className="text-2xl text-left font-bold">
                Automated Body Measurement Using DensePose.{" "}
              </h1>
              <h2 className="font-bold">2024 - 2025</h2>
            </div>
            <h2 className="font-bold text-left">Project Lead</h2>
            <p className="text-left">
              The project uses DensePose from Detectron2 to automate body
              measurements, improving accuracy over traditional methods. Testing
              on 20 individuals showed a mean absolute error (MAE) of 0.62 cm,
              highlighting DensePose's potential in health, fitness, and fashion
              applications.
            </p>
            <div className="bg-[#EBF3FA] px-4 py-2 w-fit text-center flex items-center gap-2 rounded-lg">
              <FaExternalLinkAlt className="text-black" />
              <ShinyText
                text="View Report"
                disabled={false}
                speed={3}
                className="custom-class"
                size={14}
                textColor="black"
              />
            </div>
          </div>
        </StarBorder>
        {/* report 3  */}
        <StarBorder as="div" className="custom-class" color="white" speed="5s">
          <div className="p-4 mb-3 flex flex-col gap-2">
            <div className="flex justify-between">
              <h1 className="text-2xl text-left font-bold">
                Cardiovascular Disease Prediction using Machine Learning{" "}
              </h1>
              <h2 className="font-bold">2024</h2>
            </div>
            <h2 className="font-bold text-left">Project Lead</h2>
            <p className="text-left">
              The project aims to predict CVDs to help patients assess their
              heart health, using a dataset from Mendeley Data and applying
              SMOTE for balancing. After training six models, the Support Vector
              Machine (SVM) achieved the best result of 64%, with further
              improvement through a stacking ensemble model combining multiple
              base learners and a meta-learner.
            </p>
            <div className="bg-[#EBF3FA] px-4 py-2 w-fit text-center flex items-center gap-2 rounded-lg">
              <FaExternalLinkAlt className="text-black" />
              <ShinyText
                text="View Report"
                disabled={false}
                speed={3}
                className="custom-class"
                size={14}
                textColor="black"
              />
            </div>
          </div>
        </StarBorder>
        {/* report 4  */}
        <StarBorder as="div" className="custom-class" color="white" speed="5s">
          <div className="p-4 mb-3 flex flex-col gap-2">
            <div className="flex justify-between">
              <h1 className="text-2xl text-left font-bold">
                MerakiNexus AI-Driven Creativity Secured by DeFi{" "}
              </h1>
              <h2 className="font-bold">2025</h2>
            </div>
            <h2 className="font-bold text-left">Project Lead</h2>
            <p className="text-left">
              Blockchain-based e-commerce site where people will be able to
              bring their artistic creativity into reality.
            </p>
            <div className="bg-[#EBF3FA] px-4 py-2 w-fit text-center flex items-center gap-2 rounded-lg">
              <FaExternalLinkAlt className="text-black" />
              <ShinyText
                text="View Report"
                disabled={false}
                speed={3}
                className="custom-class"
                size={14}
                textColor="black"
              />
            </div>
          </div>
        </StarBorder>
      </div>
    </div>
  );
});

Reports.displayName = "Reports";

export default Reports;
