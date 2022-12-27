import React from 'react'
import './trendingCard.css';
const TrendingCard = (props) => {
    const {nft} =props;

  return (
    <div className='trending-card absolute-center'>
    <div className='tc-inner-wrapper'>
        <div className='tc-content'>
            <img alt={nft.user_name} src={nft.banner} className='tc-banner'/>
            <div className='tc-user-info'>
                <div className='tc-ui-left'>
                    <img alt={nft.user_name} className='tc-user-logo' src={nft.user_photo}/>
                    <div>
                        <div className='tc-ui-username'>{nft.user_name}</div>
                        <div className='tc-ui-userhandle'>{nft.userhandle}</div>
                    </div>
                    
                </div>
                <img alt='ETH ON SOLANA' className='tc-solana-logo' src='https://i.seadn.io/gae/D5jhOX5Dfxua5m3r1JMOWnYIyR_a4L85MSVdLMwNnUQXcd-JetBZVGi1I1g45avx8lthUi6DHmRJ2X1KwOlhBNt1JoZo9iHtLFBZIQ?auto=format&w=128'/>
            </div>
        </div>
    </div>
  </div>
 ); 
 };
export default TrendingCard;