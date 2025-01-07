import '../../css/header.css'
import backgroundVideo from '../../asset/vid/bg.mp4'
import { useState } from 'react'

export default function Header() {

  const [videoReady, setVideoReady] = useState(false)
  return (
    <header>
      <video className={videoReady ? 'background-video' : 'background-video-hide'} src={backgroundVideo} alt="background-video" autoPlay loop muted onLoadedMetadata={() => setVideoReady(true)} />
      <nav>
        <h4>Novel<span>WorldSA</span></h4>
      </nav>
      <input className='search' type='text' placeholder='Search For A Novel'>
      </input>
      <input className='btn-search' type="button" value="Search" />
    </header>
  )
}
