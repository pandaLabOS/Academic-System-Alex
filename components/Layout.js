import Navbar from './navbar';

const name = 'AU Digital Academic Remuneration System';

const Layout = ({ children }) => {
    return (
        
        <div className="content">
            <Navbar />
            { children }
        
        </div>
    );
}

export default Layout;