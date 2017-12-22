import React from 'react'
import {  WhiteSpace, WingBlank,SearchBar,Tabs,Badge } from 'antd-mobile';
import {connect} from 'react-redux'
import * as homeComponentsActions from './homeComponentAction'
import {hashHistory} from 'react-router'
import  './base.css'
import './homeComponent.css'
import './font/iconfont.css'
import CarouselComponent from './carousel/carousel'

class HomeComponent extends React.Component{
    state={
        categorys:'狗狗服饰',
        url:'dogHome.php'
    }
    shouldComponentUpdate(newProps,newstate){
        console.log(newProps);
        return true;
    }
    categoryFunction(event){
        this.setState({
            categorys:event.title.props.children
        })
        this.props.getData(this.state.url,{category:event.title.props.children})
    }
     componentDidMount(){
        this.props.getData(this.state.url,{category:this.state.categorys})
    }
    render(){
        if(!this.props.home){
            return null
        }
        const clothes=["外套","卫衣","马甲","毛衣","配饰","居服"]
        const eat=["全犬","幼犬","成犬","老犬","小型犬","中大型犬"]
        const health=["耳部","眼部","口部","足部","医疗小用品","胸部"]
        const play=["棉质玩具","橡胶玩具","塑料玩具","发声玩具","漏食玩具","好玩玩具"]
        var type=[];
        if(this.state.categorys=='狗狗服饰'){
            clothes.forEach(function(item){
                type.push(item)
            }) 
        }
        if(this.state.categorys=='狗粮'){
            eat.forEach(function(item){
                type.push(item)
            }) 
        }
        if(this.state.categorys=='保健'){
            health.forEach(function(item){
                type.push(item)
            }) 
        }
        if(this.state.categorys=='玩具'){
            play.forEach(function(item){
                type.push(item)
            }) 
        }
      const tabs = [
            { title: <Badge>狗狗服饰</Badge> },
            { title: <Badge>狗粮</Badge> },
            { title: <Badge>保健</Badge> },
            { title: <Badge>玩具</Badge> },
          ];
        return (
          <div>
              <h1 style={{display:'flex'}}>
              <p style={{fontSize:'1.2rem',lineHeight:'100%',marginTop:'0.75rem'}}>狗站 |</p>
              <SearchBar style={{width:'80%'}}placeholder="Search"  />
            </h1>
             <Tabs tabs={tabs}
                swipeable={false}
                ref="category"
                onTabClick={this.categoryFunction.bind(this)}
              >
            </Tabs>
            <p>{this.state.categorys}</p>
                <CarouselComponent></CarouselComponent>
                <ul className="dog_type">
                    {
                        type.map(function(item,index){
                        return(
                            <li key={item}className="dog_typeBox">
                                <img src="src/images/dog_clothes_001.jpg"className="dog_typeImg"/>
                                <p>{item}</p>
                            </li>
                            )                
                        }.bind(this))
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
                        this.props.home.map(function(item,index){
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
const passToState = function(state){
    return {
        home: state.home.response
    }
}

export default connect(passToState, homeComponentsActions)(HomeComponent);
