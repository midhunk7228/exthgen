import React, { useState, useRef } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import ApplicationDialog from "./ApplicationDialog";

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}

const AccordionItem = ({
  title,
  children,
  isOpen,
  onToggle,
}: AccordionItemProps) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  

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
        <span
          className={` font-medium text-[#1E2028] text-lg md:text-2xl`}
        >
          {title}
        </span>
        <span
          className={`transform transition-transform duration-300 ease-in-out text-2xl ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          {isOpen ? "−" : "+"}
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
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  const uiDesignerContent = (
    <div className="shadow-lg w-full px-8 py-4 rounded-3xl">
      <div className="space-y-4 ">
        <h3 className="text-[#323442] font-light">
          Hey there, design rockstar! Are you tired of boring job ads? Yeah, us
          too. At Exthgen Technologies, we’re shaking things up and need a
          Senior UX Designer who can bring flair, fun, and a sprinkle of genius
          to our team. If you love turning chaos into intuitive, user-friendly
          interfaces (and don’t mind a bit of playful banter), read on!
        </h3>
        <h3 className="font-medium text-lg text-[#1E2028]">What You’ll Do</h3>
        <ul
          className={`space-y-2 pl-8 list-disc text-[#323442] font-light marker:text-gray-400 marker:text-xl text-sm md:text-base`}
        >
          <li>
            <span className="font-semibold">Craft Delightful Experiences:</span>{" "}
            Transform complex problems into elegant, user-centric solutions that
            make people go, “Wow, that’s actually simple!”
          </li>
          <li>
            <span className="font-semibold">Collaborate Like a Pro:</span> Work
            closely with developers, product managers, and other design gurus.
            Yes, that means real conversations (we promise to let you finish
            your thoughts).
          </li>
          <li>
            <span className="font-semibold">Prototype & Iterate:</span> Rapidly
            prototype and test ideas, because we all know perfection happens
            only after a few “oops” moments.
          </li>
          <li>
            <span className="font-semibold">Advocate for Users:</span> Stand up
            for our users (and not just during office debates about which font
            is cooler).
          </li>
          <li>
            <span className="font-semibold">Stay Ahead of Trends:</span> Keep up
            with the latest UX trends, and if you see a cool new tool, tell us
            about it. We’re always game for a tech upgrade!
          </li>
        </ul>

        <h3 className="font-medium mt-6 text-[#1E2028] text-lg">
          What You Bring to the Table
        </h3>
        <ul className="space-y-2 pl-8 list-disc text-[#323442] font-light marker:text-gray-400 marker:text-xl">
          <li>
            <span className="font-semibold">Experience:</span> A solid
            background in UX design with a portfolio that makes us wonder how we
            ever lived without your brilliance.
          </li>
          <li>
            <span className="font-semibold">Creative Problem-Solving:</span> An
            uncanny ability to make design magic happen even when faced with
            stubborn, confusing challenges.
          </li>
          <li>
            <span className="font-semibold">Technical Know-How:</span>{" "}
            Familiarity with design tools (Sketch, Figma, Adobe XD… you get the
            idea) and a knack for user research.
          </li>
          <li>
            <span className="font-semibold">Team Spirit:</span> A collaborative
            attitude and the willingness to occasionally let someone else take
            the spotlight (only sometimes, of course).
          </li>
          <li>
            <span className="font-semibold">Humor:</span> A dash of wit to keep
            meetings fun and a creative approach that keeps our users smiling.
          </li>
        </ul>

        <h3 className="font-medium mt-6 text-[#1E2028] text-lg">
          What’s in It for You?
        </h3>
        <ul className="space-y-2 pl-8 list-disc text-[#323442] font-light marker:text-gray-400 marker:text-xl">
          <li>
            <span className="font-semibold">A Cool Team:</span> Join a friendly,
            vibrant crew that appreciates design puns as much as great work.
          </li>
          <li>
            <span className="font-semibold">Flexibility:</span> Work where you
            work best – our door’s always open, be it virtual or otherwise.
          </li>
          <li>
            <span className="font-semibold">Growth Opportunities:</span> We
            believe in leveling up. Whether it’s mentoring juniors or
            spearheading innovative projects, we’re here to support your
            journey.
          </li>
          <li>
            <span className="font-semibold">The Chance to Impact:</span> Your
            designs will shape how thousands interact with our products. No
            pressure, right?
          </li>
          <li>
            <span className="font-semibold">Humor:</span> A dash of wit to keep
            meetings fun and a creative approach that keeps our users smiling.
          </li>
        </ul>

        <h3 className="font-medium mt-6 text-[#1E2028]">Join the team</h3>
        <div className="mt-6">
          <p className="text-gray-600 mb-4 font-light italic">
            So, if you’re ready to blend creativity, humor, and top-notch UX
            skills in a role that values both great design and great
            personalities, Exthgen Technologies is calling your name. Don’t just
            design—design with heart (and a bit of sass)! Apply now and let’s
            make the digital world a friendlier, more delightful place—one pixel
            at a time!
          </p>

          <p>Job Type: Full-time</p>
          <div className="mt-8 flex space-x-4 font-visby ">
            <button
              onClick={() => setIsDialogOpen(true)}
              className="bg-exthgen-gradient text-white py-3 px-6 hover:bg-pink-600 rounded-full text-sm font-hedvig-serif font-bold leading-6 flex items-center"
            >
              Apply <FaArrowRightLong className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const pythonContent = (
    <div className="shadow-lg w-full px-8 py-4 rounded-3xl">
      <div className="space-y-4 ">
        <h3 className="text-[#323442] font-light">
          Hey there, code wizard! If you’re tired of dull job descriptions that
          make programming sound like watching paint dry, we’ve got news for
          you. At Exthgen Technologies, we’re on the hunt for a Python Django
          Developer who loves clean code, scalable solutions, and the occasional
          tech meme. If writing efficient, elegant backend systems is your jam,
          keep reading!
        </h3>
        <h3 className="font-medium text-lg text-[#1E2028]">What You’ll Do</h3>
        <ul
          className={`space-y-2 pl-8 list-disc text-[#323442] font-light marker:text-gray-400 marker:text-xl text-sm md:text-base`}
        >
          <li>
            <span className="font-semibold">Build Awesome Backends:</span> Write
            clean, efficient, and scalable code in Python and Django—because
            messy code belongs in horror stories, not in our repos.
          </li>
          <li>
            <span className="font-semibold">Craft APIs That Just Work:</span>{" "}
            Design and implement RESTful APIs that make our frontend devs cry
            tears of joy (or at least not tears of frustration).
          </li>
          <li>
            <span className="font-semibold">Optimize Performance:</span>{" "}
            Fine-tune databases and backend systems to handle traffic like a
            pro—no crashing allowed!
          </li>
          <li>
            <span className="font-semibold">Debug Like a Detective:</span> Find
            and fix bugs before they turn into full-blown disasters (yes, we’re
            looking at you, mysterious 500 errors).
          </li>
        </ul>

        <h3 className="font-medium mt-6 text-[#1E2028] text-lg">
          What You Bring to the Table
        </h3>
        <ul className="space-y-2 pl-8 list-disc text-[#323442] font-light marker:text-gray-400 marker:text-xl">
          <li>
            <span className="font-semibold">Python Proficiency:</span> You speak
            Python fluently (maybe even dream in it). Bonus points if you can do
            a speed-run of Django models.
          </li>
          <li>
            <span className="font-semibold">API Mastery:</span> An You know how
            to design and integrate RESTful APIs without breaking a sweat.
          </li>
          <li>
            <span className="font-semibold">Database Knowledge:</span>{" "}
            Experience with PostgreSQL, MySQL, or MongoDB—because data deserves
            the best storage possible.
          </li>
          <li>
            <span className="font-semibold">Team Spirit:</span> A collaborative
            attitude and the willingness to occasionally let someone else take
            the spotlight (only sometimes, of course).
          </li>
          <li>
            <span className="font-semibold">Humor:</span> A dash of wit to keep
            meetings fun and a creative approach that keeps our users smiling.
          </li>
        </ul>

        <h3 className="font-medium mt-6 text-[#1E2028] text-lg">
          What’s in It for You?
        </h3>
        <ul className="space-y-2 pl-8 list-disc text-[#323442] font-light marker:text-gray-400 marker:text-xl">
          <li>
            <span className="font-semibold">A Cool Team:</span> Join a friendly,
            vibrant crew that appreciates design puns as much as great work.
          </li>
          <li>
            <span className="font-semibold">Flexibility:</span> Work where you
            work best – our door’s always open, be it virtual or otherwise.
          </li>
          <li>
            <span className="font-semibold">Growth Opportunities:</span> We
            believe in leveling up. Whether it’s mentoring juniors or
            spearheading innovative projects, we’re here to support your
            journey.
          </li>
          <li>
            <span className="font-semibold">The Chance to Impact:</span> Your
            designs will shape how thousands interact with our products. No
            pressure, right?
          </li>
          <li>
            <span className="font-semibold">Humor:</span> A dash of wit to keep
            meetings fun and a creative approach that keeps our users smiling.
          </li>
        </ul>

        <h3 className="font-medium mt-6 text-[#1E2028]">Join the team</h3>
        <div className="mt-6">
          <p className="text-gray-600 mb-4 font-light italic">
            So, if you’re ready to write code that matters, create
            smooth-running applications, and laugh at bad variable names, hit us
            up! Apply now, and let’s build something awesome together.
          </p>

          <p>Job Type: Full-time</p>
          <div className="mt-8 flex space-x-4 font-visby ">
            <button
              onClick={() => setIsDialogOpen(true)}
              className="bg-exthgen-gradient text-white py-3 px-6 hover:bg-pink-600 rounded-full text-sm font-hedvig-serif font-bold leading-6 flex items-center"
            >
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
        isOpen={openSection === "uiDesigner"}
        onToggle={() => toggleSection("uiDesigner")}
      >
        {uiDesignerContent}
      </AccordionItem>

      <AccordionItem
        title="Python django developer"
        isOpen={openSection === "pythonDjango"}
        onToggle={() => toggleSection("pythonDjango")}
      >
        {pythonContent}
      </AccordionItem>

      <AccordionItem
        title="Graphics Designer"
        isOpen={openSection === "graphicsDesigner"}
        onToggle={() => toggleSection("graphicsDesigner")}
      >
        {uiDesignerContent}
      </AccordionItem>

      <ApplicationDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
      />
    </div>
  );
};

export default CareerAccordion;
