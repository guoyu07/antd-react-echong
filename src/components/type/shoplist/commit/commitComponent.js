import React from  "react";
import { NavBar, Icon,List,Button} from 'antd-mobile';
const Item = List.Item;
const Brief = Item.Brief;
class Commitcomponent extends React.Component{

    state={
        url:'goodlist.php',
        carurl:'goodcart.php',
    }

    componentDidMount(){
        //this.props.get(this.state.url,this.props.location.query)
    }
    render(){

            return  <div>
                     <NavBar
                          mode="light"
                          icon={<Icon type="left" />}
                          onLeftClick={() => history.go(-1)}
                          rightContent={[
                            <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                            <Icon key="1" type="ellipsis" />,
                          ]}
                        >NavBar</NavBar>
                    <List renderHeader={() => 'Text Wrapping'} className="my-list">
                       <Item extra="10:30" align="top" thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png" multipleLine>
                      Title <Brief>subtitle</Brief>
                    </Item>
                
                    </List>
                    </div>
    }
}

export default  Commitcomponent
