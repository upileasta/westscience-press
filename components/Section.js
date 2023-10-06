
export const Section = ({id, title, color, children}) => {
    return (
      <div className={`bg-${color} py-20 px-4 sm:px-8 md:px-20 lg:px-8 xl:px-12 2xl:px-20`} id={id}>
          <div className="container mx-auto flex flex-col justify-center items-center">
              <div className="inline-block text-4xl font-semibold text-center">{title}</div>
              <div className="w-20 h-1 mt-4 mb-12 rounded bg-blue-500"></div>
  
              {children}
  
          </div>
      </div>
    )
  }
  