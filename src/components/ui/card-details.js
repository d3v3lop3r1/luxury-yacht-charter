

const Card = ({ className = '', children }) => {
  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden ${className}`}>
      {children}
    </div>
  )
}

const CardHeader = ({ className = '', children }) => {
  return <div className={`px-6 py-4 ${className}`}>{children}</div>
}

const CardTitle = ({ className = '', children }) => {
  return <h3 className={`text-xl font-semibold mb-2 ${className}`}>{children}</h3>
}

const CardDescription = ({ className = '', children }) => {
  return <p className={`text-gray-600 ${className}`}>{children}</p>
}

const CardContent = ({ className = '', children }) => {
  return <div className={`px-6 py-4 ${className}`}>{children}</div>
}

const CardFooter = ({ className = '', children }) => {
  return <div className={`px-6 py-4 bg-gray-50 ${className}`}>{children}</div>
}


export {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle}