import catLoader from './cat-loader.mp4'
import './App.css'

const Loader = () => {

    return (
        <div >
            <video src={catLoader} type="video/mp4" autoPlay playsInline id="myVideo" volume='2' className='loader'/>
        </div>
    )
}

export default Loader