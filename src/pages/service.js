import React from 'react';
import KtHeaderComp from '../components/ktheadercomp';
class Service extends React.Component{
    render(){
        return(
            <div>
            <KtHeaderComp active='service'/>
            <h1>这是服务页面</h1>
            </div>
        );
    }
}

export default Service;