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
    categoryFunction(event){
        this.setState({
            categorys:event.title.props.children
        })
        this.props.getHome(this.state.url,{category:event.title.props.children})
    }
    componentDidMount(){
        this.props.getHome(this.state.url,{category:this.state.categorys})
    }
    flyList(a){
        hashHistory.push({
            pathname:'/homeList',
            query:{
                typeList:a,
                categoryName:this.state.categorys
            }
        })
    }
    flyDetail(a){
        var categoryName1=this.state.categorys;
         hashHistory.push({
            pathname:'/shoplist',
            query:{
                id:a,
                title:categoryName1
            }
        })
    }
    searchList(){
        var searchValue=this.refs.searchText.state.value;
        console.log(this.refs.searchText.state.value)
        hashHistory.push({
            pathname:'/homeSearch',
            query:{
                search:searchValue
            }
        })
    }
    addAudience(a,b){
        var newAudience=Number(a)+1;
        this.props.getHome(this.state.url,{category:this.state.categorys,audience:newAudience,paramsId:b})
    }
    render(){
        if(!this.props.home){
            return null
        }
        const clothes=[{type:'外套',img:'src/images/cxl_imgs/clothes1.jpg'},{type:'卫衣',img:'src/images/cxl_imgs/clothes2.jpg'},{type:'马甲',img:'src/images/cxl_imgs/clothes3.jpg'},{type:'毛衣',img:'src/images/cxl_imgs/clothes4.jpg'},{type:'配饰',img:'src/images/cxl_imgs/clothes5.jpg'},{type:'居服',img:'src/images/cxl_imgs/clothes6.jpg'}]
        const health=[{type:'罐头',img:'src/images/cxl_imgs/health1.jpg'},{type:'餐盒',img:'src/images/cxl_imgs/health2.jpg'},{type:'妙鲜包',img:'src/images/cxl_imgs/health3.jpg'},{type:'补丁',img:'src/images/cxl_imgs/health4.jpg'},{type:'奶酪小吃',img:'src/images/cxl_imgs/health5.jpg'},{type:'冰淇淋',img:'src/images/cxl_imgs/health6.jpg'}]
        const eat=[{type:'全犬',img:'src/images/cxl_imgs/eat1.jpg'},{type:'幼犬',img:'src/images/cxl_imgs/eat2.jpg'},{type:'成犬',img:'src/images/cxl_imgs/eat3.jpg'},{type:'老犬',img:'src/images/cxl_imgs/eat4.jpg'},{type:'小犬',img:'src/images/cxl_imgs/eat5.jpg'},{type:'捞犬',img:'src/images/cxl_imgs/eat6.jpg'}]
        const play=[{type:'棉质玩具',img:'src/images/cxl_imgs/toy1.jpg'},{type:'橡胶玩具',img:'src/images/cxl_imgs/toy2.jpg'},{type:'塑料玩具',img:'src/images/cxl_imgs/toy3.jpg'},{type:'发声玩具',img:'src/images/cxl_imgs/toy4.jpg'},{type:'漏食玩具',img:'src/images/cxl_imgs/toy5.jpg'},{type:'捞仔玩具',img:'src/images/cxl_imgs/toy6.jpg'}]
        var type=[];
        if(this.state.categorys=='狗狗服饰'){
            clothes.forEach(function(item){
                type.push(item)
            }) 
        }
        if(this.state.categorys=='狗狗食物'){
            eat.forEach(function(item){
                type.push(item)
            }) 
        }
        if(this.state.categorys=='狗狗窝垫'){
            health.forEach(function(item){
                type.push(item)
            }) 
        }
        if(this.state.categorys=='狗狗玩具'){
            play.forEach(function(item){
                type.push(item)
            }) 
        }
      const tabs = [
            { title: <Badge>狗狗服饰</Badge> },
            { title: <Badge>狗狗食物</Badge> },
            { title: <Badge>狗狗窝垫</Badge> },
            { title: <Badge>狗狗玩具</Badge> },
          ];
        return (
          <div style={{paddingTop:'5.5rem'}}>
                <div style={{position:'fixed',top:'0rem',width:'100%',zIndex:'100',background:'white'}}>
                  <h1 style={{display:'flex'}}>
                  <p style={{fontSize:'1.2rem',lineHeight:'100%',marginTop:'0.75rem'}}>狗站 |</p>
                  <SearchBar ref="searchText"style={{width:'70%'}}placeholder="Search" />
                  <span onClick={this.searchList.bind(this)} style={{color:'red',marginTop:'0.8rem'}}>搜索一波</span>
                    </h1>
                <Tabs tabs={tabs}
                    swipeable={false}
                    ref="category"
                    onTabClick={this.categoryFunction.bind(this)}
                  >
                </Tabs> 
                </div>
                <CarouselComponent></CarouselComponent>
                <ul className="dog_type">
                    {
                        type.map(function(item,index){
                        return(
                            <li key={index}className="dog_typeBox" onClick={this.flyList.bind(this,item.type)}>
                                <img src={item.img} className="dog_typeImg"/>
                                <p>{item.type}</p>
                            </li>
                            )                
                        }.bind(this))
                    }
                </ul>
                <div className="dogClothes_box">
                    <img style={{width:'10rem',marginRight:'0.6rem'}} src="src/images/cxl_imgs/clothesxiao1.jpg"/>
                    <img style={{width:'10rem'}} src="src/images/cxl_imgs/clothesxiao2.jpg"/>
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
                            return <li key={index} className="tejia_small" data-id={item.goodId} data-category={item.category}>
                                    <img style={{width:'100%',height:'70%',marginBottom:'0.5rem'}}src={item.goodpic} onClick={this.flyDetail.bind(this,item.goodId)}/>
                                    <h4><span>4色可选</span>{item.goodname}</h4>
                                    <p><span style={{color:'red'}}>¥{item.goodprice}.00</span>
                                        <span className="fr iconfont icon-shoucang "onClick={this.addAudience.bind(this,item.goodaudience,item.goodId)}style={{color:'red'}}></span>
                                        <span className="fr">{item.goodaudience}</span>
                                    </p>
                                </li>
                        }.bind(this))
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
