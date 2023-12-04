import React, {ReactNode} from 'react';

interface SectionCardsProps {
  titleSection: string;
  action?: () => void;
  children: ReactNode;
}

const SectionCards = ({titleSection, children, action}: SectionCardsProps) => (
  <div className="flex flex-col mt-4 text-gray-700 bg-white bg-clip-border rounded-xl">
    <div className="p-6">
      <div className="flex flex_row justify-between items-center">
        <h5 className="block text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          {titleSection}
        </h5>
        {action && <button
          className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-dark text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
          type="button" onChange={action}>
          ver más
        </button>}
      </div>
      <div className="flex flex-row gap-8">
        {children}
      </div>
    </div>
  </div>
);

export default SectionCards;