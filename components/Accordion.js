
export const Accordion = ({className, question, answer}) => {
    return (
      <div className={`group relative overflow-hidden ${className}`}>
          <input type="checkbox" className="peer absolute top-0 inset-x-0 w-full h-full opacity-0 z-10 cursor-pointer" />
          <div className="h-full w-full pr-4 py-2 flex items-center">
              <h1 className="group-hover:text-cyan-500 text-lg font-medium">
                  {question}
              </h1>
          </div>
          <div className="absolute top-3 right-0 transition-transform duration-500 rotate-180 peer-checked:rotate-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
              </svg>
          </div>
          <div className="overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-40">
              <div className="border-t border-cyan-400 px-4 py-2 text-base">{answer}</div>
          </div>
      </div>
    )
  }
  