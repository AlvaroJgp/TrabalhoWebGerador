import Navbar from './navbar';
import BancoMal from './BancoMal';

function Desmotivacional() {
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
        <BancoMal />
            
        </div>
        </>
       
    )
}

export default Desmotivacional