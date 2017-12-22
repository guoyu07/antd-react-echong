import React from 'react' 
import {connect} from 'react-redux'
import CarouselComponent from '../carousel/carousel'
import  '../base.css'
import  './home_commonList.css'
import * as home_commonListActions from './home_commonListAction'
import '../font/iconfont.css'

class Home_commonList extends React.Component{
    componentDidMount(){
        this.props.getData(this.props.url)
    }
    getKeys(item){
        var newObj = item ? Object.keys(item) : []
        return newObj
    }
    render(){
        if(!this.props.dataset){
            return null
        }
        const dogs=["外套","卫衣","马甲","毛衣","配饰","居服"]
        return(
            <div>
                <CarouselComponent></CarouselComponent>
                <ul className="dog_type">
                    {
                        dogs.map(function(item,index){
                            return(
                                <li key={item}className="dog_typeBox">
                                    <img src="src/images/dog_clothes_001.jpg"className="dog_typeImg"/>
                                    <p>{item}</p>
                                </li>
                                )                
                        })
                    }
                </ul>
                <div className="dogClothes_box">
                    <img style={{width:'10rem',marginRight:'0.6rem'}} src="src/images/cxl_imgs/dogClothes1.jpg"/>
                    <img style={{width:'10rem'}} src="src/images/cxl_imgs/dogClothes2.jpg"/>
                </div>
                <h3 className="cxl_dog">
                    <span style={{fontSize:'1.2rem',color:'red'}}>
                        <i className="iconfont icon-vip"></i>
                        特价栏
                        <i className="iconfont icon-vip"></i>
                    </span><br/>
                    <span style={{fontSize:'1rem'}}>走过路过，请勿错过</span>
                </h3>
                <ul className="tejia_box">
                    {
                        this.props.dataset.data1.map(function(item,index){
                            return <li key={index} className="tejia_small">
                                    <img style={{width:'100%',height:'70%',marginBottom:'0.5rem'}}src={item.goodpic}/>
                                    <h4><span>4色可选</span>{item.goodname}</h4>
                                    <p><span style={{color:'red'}}>¥{item.goodprice}.00</span>
                                        <span className="fr iconfont icon-shoucang "></span>
                                        <span className="fr">{item.goodaudience}</span>
                                    </p>
                                </li>
                        })
                    }
                </ul>
            </div>
        )
    }
}
const mapToState = function(state){
    return {
        dataset: state.home_commonList.response
    }
}
export default connect(mapToState, home_commonListActions)(Home_commonList);
