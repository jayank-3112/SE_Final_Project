const AuthLayout = ({children} :{children:React.ReactNode}) => { 
    return ( 
        //<div className="bg-gray-500 h-full">
        <div className="h-full items-center flex-1 justify-center">     
        {children}
        </div>
     );
}
 
export default AuthLayout ;