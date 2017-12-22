import React from 'react'
import { connect } from 'react-redux'
import * as informationAction from './informationAction'
import './petinformation.css'
import '../font/iconfont'

class Petinformation extends React.Component{
    componentDidMount() {
        this.props.getInformation('petinformation.php')
    }
    petedit(event) {
        hashHistory.push('petedit')
    }
    removepet(){
        
    }
    render(){
        if (!this.props.information) {
            return null
        }
        return (
            <div className="information">
                {this.props.information.map(function(item,idx){
                    return <div key={idx} className="pet" >
                        <span className="nickname">{item.nickname}{function (){
                            if (item.sex == "男") {
                                return <img src={'./src/images/nan.png'} className="sex"/>
                            }else if(item.sex=='女'){
                                return <img src={'./src/images/women.png'} className="sex" />
                            }
                        }()}<a className="species">{'('+item.species+')'}</a></span>
                        <div className="operation"><span className="edit"><a className="icon-pingjia1 iconfont"></a>编辑</span><span onClick={this.removepet}><a className="icon-shanchu iconfont"/>删除</span></div>
                    </div>
                }.bind(this))}
            </div>
        )
    }
}
const information = function (state) {
    return {
        information:state.petinfomation.response
    }
}
export default connect(information, informationAction)(Petinformation);