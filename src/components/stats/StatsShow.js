import React from 'react';

class Stats extends React.Component{
    render(){
        const { title, subtitle, map } = this.props;
        return(
            <div className="flex flex-row justify-around">
                <div  className="bg-transparent br3 pa3 pt1 ma2 grow shadow-5 bw">
                    <h5 className="montSerrat greenText tl">{title}</h5>
                    <p className="poiret  black-text tl" >{subtitle}</p>
                    {
                        map
                        ? Array.from(map).map( ([key, value], index) => {
                            return <p className="poiret b black-text tl" key={index}>{`${index + 1}. ${key} - ${value} `}</p>
                          })
                        :<p className="dosis black-text tl">No values</p>  
                    }
                </div>  
            </div>          
        );
    }
}

export default Stats;