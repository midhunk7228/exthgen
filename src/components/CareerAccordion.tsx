import React, { useState, useRef, useEffect } from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}

const AccordionItem = ({ title, children, isOpen, onToggle }: AccordionItemProps) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  React.useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  return (
    <div className="border-b border-gray-200 ">
      <button
        className="w-full py-4 px-6 flex justify-between items-center bg-white  transition-all duration-300 ease-in-out"
        onClick={onToggle}
      >
        <span className={`text-2xl font-medium text-[#1E2028] ${isMobile ? "text-lg" : ""}`}>{title}</span>
        <span 
          className={`transform transition-transform duration-300 ease-in-out text-2xl ${
            isOpen ? 'rotate-180' : ''
          }`}
        >
          {isOpen ? '−' : '+'}
        </span>
      </button>
      <div
        style={{ height: `${height}px` }}
        className={`overflow-hidden transition-all duration-300 ease-in-out `}
      >
        <div ref={contentRef} className={`p-6 bg-white `}>
          {children}
        </div>
      </div>
    </div>
  );
};

const CareerAccordion = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  const uiDesignerContent = (
    <div className='shadow-lg w-full px-8 py-4 rounded-3xl'>
    <div className="space-y-4 ">
      <h3 className="font-medium text-lg text-[#1E2028]">Responsibilities</h3>
      <ul className={`space-y-2 pl-8 list-disc text-[#323442] font-light marker:text-gray-400 marker:text-xl ${isMobile ? "text-sm" : ""}`}>
        <li>Approach highly detailed and professional designs.</li>
        <li>Identify and troubleshoot UX problems.</li>
        <li>Craft relevant and engaging designs on a multitude of projects for multiple platforms (website, mobile apps, e-commerce, social updates, case studies, etc.)</li>
        <li>Work closely with developers, stakeholders, and project team members.</li>
        <li>Communicate design intent through wireframes, site maps, and user flows.</li>
        <li>Self-learner, ability to learn new tools quickly and work in a fast-evolving environment.</li>
        <li>Good grasp of picking suitable colors with an eye for detail.</li>
        <li>Attention to detail and an open mind to feedback</li>
        <li>Excellent Problem-solving skills</li>
      </ul>
      
      <h3 className="font-medium mt-6 text-[#1E2028]">Requirements</h3>
      <ul className="space-y-2 pl-8 list-disc text-[#323442] font-light marker:text-gray-400 marker:text-xl">
        <li>2+ years of experience</li>
        <li>Proficiency in a variety of design tools such as Adobe XD, Photoshop, Illustrator, and Figma.</li>
        <li>Familiar with using responsive web designs to create applications that automatically conform to multiple screen sizes/devices.</li>
        <li>Ability to stay in the loop and on top of the latest standards, changes, trends in the visual design field, and UI/UX design knowledge.</li>
        <li>Communicate design intent through wireframes, site maps, and user flows.</li>
        <li>Expert knowledge in the graphics production process.</li>
        <li>Excellent time management and organizational skills.</li>
        <li>Ability to take projects from start to finish with minimal supervision.</li>
      </ul>

      <h3 className="font-medium mt-6 text-[#1E2028]">Join the team</h3>
      <div className="mt-6">
        <p className="text-gray-600 mb-4 font-light">
          Thank you for your keen interest in becoming a part of Exthgen technologies. 
          We're eagerly looking forward to gaining deeper insights into your candidacy through this application.
        </p>
        <div className="mt-8 flex space-x-4 font-visby ">
          <button className="bg-exthgen-gradient text-white py-3 px-6 hover:bg-pink-600 rounded-full text-sm font-hedvig-serif font-bold leading-6 flex items-center">
            Apply <FaArrowRightLong className="ml-2" />
          </button>
        </div>
      </div>
    </div>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto">
      <AccordionItem
        title="UI/UX designer"
        isOpen={openSection === 'uiDesigner'}
        onToggle={() => toggleSection('uiDesigner')}
      >
        {uiDesignerContent}
      </AccordionItem>
      
      <AccordionItem
        title="Graphics Designer"
        isOpen={openSection === 'graphicsDesigner'}
        onToggle={() => toggleSection('graphicsDesigner')}
      >
        {uiDesignerContent}
      </AccordionItem>
      
      <AccordionItem
        title="Mobile App developer"
        isOpen={openSection === 'mobileAppDev'}
        onToggle={() => toggleSection('mobileAppDev')}
      >
        {uiDesignerContent}
      </AccordionItem>
    </div>
  );
};

export default CareerAccordion;