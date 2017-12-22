import React from 'react'
import {  Carousel } from 'antd-mobile';

export default class CarouselComponent extends React.Component{
    state = {
      data: ['', '', ''],
      imgHeight: 176,
    }
    componentDidMount() {
        setTimeout(() => {
          this.setState({
            data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
          });
        }, 100);
     } 
    render(){
        return (
          <div>          
            <Carousel
              autoplay={true}
              infinite={true}
              selectedIndex={1}
            >
              {this.state.data.map(ii => (
                <a
                  key={ii}
                  style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                >
                  <img
                    src={`https://zos.alipayobjects.com/rmsportal/${ii}.png`}
                    alt=""
                    style={{ width: '100%', verticalAlign: 'top' }}
                    onLoad={() => {
                      // fire window resize event to change height
                      window.dispatchEvent(new Event('resize'));
                      this.setState({ imgHeight: 'auto' });
                    }}
                  />
                </a>
              ))}
            </Carousel>
          </div>
        )
    }
}
