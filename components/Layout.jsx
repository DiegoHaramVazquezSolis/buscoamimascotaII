const Layout = ({ children }) => {
    return (
        <div className="page-layout">
            {children}
            <style jsx global>{`
                body {
                    background: #EFEFEF;
                }
            `}</style>
        </div>
    );
}
  
export default Layout;
