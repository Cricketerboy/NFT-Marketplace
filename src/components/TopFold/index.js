import React from 'react'
import Button from '../../common/styles/Button';
import './topFold.css';
const TopFold = () => {
  return( <div className="topfold absolute-center">
    <div className="tf-left">
      <div className="tf-heading">
        Invent collect, & sell <span  className="heading-gradient">Extraordinary</span> NFTs
      </div>
      <div className="tf-description">the leading NFT Marketplace on Ethereum.Discover the best NFT collection</div>
      <div className="tf-left-btns">
        <Button btnType='PRIMARY' btnText='Explore'/>
        <Button btnType='SECONDARY' btnText='Create' customClass='tf-left-secondary-btn'/>
      </div>
      <div className='tf-left-infoStats'>
     <div className='tf-is-infoItem absolute-center'>
       <div className='tf-infoItem-count'>200K+</div>
       <div className='tf-infoItem-label'>Collections</div>
       </div>
       <div className='tf-is-infoItem absolute-center'>
       <div className='tf-infoItem-count'>10K+</div>
       <div className='tf-infoItem-label'>Artists</div>
       </div>
       <div className='tf-is-infoItem absolute-center'>
       <div className='tf-infoItem-count'>400k+</div>
       <div className='tf-infoItem-label'>Community</div>
       </div>
      </div>
     </div>
    <div className="tf-right">
        <div className='tf-r-bg-blob'></div>
        <div className='tf-right-diamond'>
          <div className='tf-r-diamond-item absolute-center'>
            <img className='tf-r-diamond-img'  alt='diamond-banner' src='https://i.seadn.io/gae/LS2AweBD09u_9ZJKCg0kygkkUwUEm48vdgFNYm7SoT-GvQ9iysUUCbSz5ILDKd3SfLFstKOOmKjeWdE7_SZwVhCSggHiLLwytEGN?auto=format&w=128'/>
          </div>
          <div className='tf-r-diamond-item absolute-center'>
            <img className='tf-r-diamond-img'  alt='diamond-banner' src='https://i.seadn.io/gcs/files/272595584a523fe86ec8b159c9b846ce.gif?auto=format&w=128'/>
          </div>
          <div className='tf-r-diamond-item absolute-center'>
            <img className='tf-r-diamond-img'  alt='diamond-banner' src='https://i.seadn.io/gcs/files/9638148e7c1ff24f9a26b99a5eaedc0c.gif?auto=format&w=128'/>
          </div>
          <div className='tf-r-diamond-item absolute-center'>
            <img className='tf-r-diamond-img'  alt='diamond-banner' src='https://i.seadn.io/gae/L0q8wSDn-8PTImu8c_Ot9_iU5qN2E6pfs1A9bMjfyNlS3YWnMHToz9BC2cXolb1DeGSiO8qo8BMY9Xb947Tl0TjEUV-eBrhpNcY_jeg?auto=format&w=128'/>
          </div>
        </div>
    </div>
  </div>
  );
};

export default TopFold