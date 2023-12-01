import Navbar from './navbar';
import Banco from './Banco';

function Motivacional() {
    const divStyle = {
        width: '100%',
        height: '100px',
        position: 'absolute',
        top:'0',
        bottom: '0',
        left: '0',
        right: '0',
        margin: 'auto'
        }
    return(
        <>
        <Navbar />
        <div style={divStyle}>
        <Banco />
            
        </div>
        </>
       
    )
}

export default Motivacional