import React from 'react'

const MainHeaderHeight = 60;
const style = {
    paddingTop: `${MainHeaderHeight}px`
}
const withPadding = (WrappedComponent) => {
    console.log(style);
    return class extends React.Component {
        render() {
            return <div style={style}>

                <WrappedComponent {...this.props}/>
            </div>
        }
    }
}


export default withPadding;