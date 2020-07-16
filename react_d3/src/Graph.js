import React, {useRef, useEffect} from 'react';
import * as d3 from 'd3';


function Graph(props){
    console.log("Me pinte")
    const canvas = useRef(null)

    useEffect(() => {

        const marging = {top:30,right:30, bottom:70, left:60}
        const width = 460 - marging.left - marging.right;
        const height = 400 - marging.top - marging.bottom;

        d3.select(canvas.current).select('svg').remove()
        //document.getElementById()
        const svg = d3.select(canvas.current)
                    .append('svg')
                    .attr("width",width+marging.left+marging.right)
                    .attr("height",height+marging.top+marging.bottom)
                    .append('g')
                    .attr('transform', `translate(${marging.left},${marging.top})`);
    
        
        const x = d3.scaleBand()
                    .range([0,width])
                    .domain(
                        props.data.map((chr) => chr.name)
                    )
                    .padding(0.2)
        svg.append('g')
            .attr("transform",`translate(0,${height})`)
            .call(d3.axisBottom(x))
            .selectAll("text")
            .attr("transform","translate(-10,0)rotate(-45)")
            .style("text-anchor","end")
    
        const y = d3.scaleLinear().domain([0,200]).range([height,0])   //The domain([0,200]) can be edited, it is the range of yaxis
        svg.append("g").call(d3.axisLeft(y))   
        
        svg.selectAll("mybar")
            .data(props.data)
            .enter()
            .append('rect')
            .attr("x",(d) => {
                return x(d.name)  //Aqui se cambia dependiendo en la api, esta tomando los valores de name, como name son los nombres lol
            })
            .attr("y",(d) => {
                return y(d.mass) //Aqui se cambia y toma el valor de height
            })
            .attr("width",x.bandwidth())
            .attr("height", (d) => {
                return height - y(d.mass) //Aqui se cambia y toma el valor de height
            })
            .attr("fill","#69b3a2")
    

    },[props.data])


    return (
        <div ref={canvas}> 
            {}
        </div>
    )

}

export default Graph 